const socket = new WebSocket("ws://localhost:8080/ws");

const connect = callback => {
    // console.log("Attempting connection...");
    
    // Define event handlers
    socket.onopen = () => {
        console.log("Successfully connected.");
    };

    socket.onmessage = msg => {
        console.log("Server says: ", msg.data);
        callback(msg);
    }

    socket.onclose = event => {
        console.log("Socket connection closed.", event);
    };

    socket.onerror = error => {
        console.log("Socket Error: ", error);
    };
};

const sendMessage = msg => {
    console.log("Sending message: ", msg);
    socket.send(msg);
}

export { connect, sendMessage };
