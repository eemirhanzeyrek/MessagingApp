const express = require('express')
const socket = require('socket.io')

const app = express()
const server = app.listen(3000)

app.use(express.static('public'))

const io = socket(server)

io.on('connection', (socket) => {
    console.log(socket.id)

    socket.on('messaging', data => {
        io.sockets.emit('messaging', data)
    })

    socket.on('typing', data => {
        socket.broadcast.emit('typing', data)
    })
})