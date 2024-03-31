FROM golang:1.22

# Set working directory
WORKDIR /app

# Copy Go module files
COPY go.mod go.sum ./

# Install dependencies
RUN go mod download

# Copy the rest of the application code
COPY . .

# Build the Go app
RUN go build -o main .

# Set command to run the app
CMD ["./main"]
