package main

import (
	"fmt"
	"net/http"
	"sync"

	"github.com/Yasir323/go-chat/pkg/websocket"
)

type IdStore struct {
	Id    int
	mutex sync.Mutex
}

func (id *IdStore) getId() int {
	defer id.mutex.Unlock()

	id.mutex.Lock()
	currId := id.Id
	id.Id++

	return currId
}

// websocket endpoint
func serveWebsocket(pool *websocket.Pool, idStore *IdStore, w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Host)

	// Upgrade this http connection to a websocket
	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+V\n", err)
	}
	// go websocket.Writer(ws)
	// websocket.Reader(ws)

	client := &websocket.Client{
		ID:   fmt.Sprintf("User-%v", idStore.getId()),
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	idStore := &IdStore{Id: 0}
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) { serveWebsocket(pool, idStore, w, r) })
}

func main() {
	fmt.Println("Distributed Chat App v0.01")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
