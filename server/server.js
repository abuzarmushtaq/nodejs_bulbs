let express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http);


app.use('/', express.static('view'))
http.listen(80);



io.on('connect', (socket) => {

    socket.on('client connected', function () {
        // console.log('Client Connected!');
        socket.emit('server');
    })

    socket.on('b1', (data1) => {
        io.emit('c1', data1);
    });

    socket.on('b2', (data2) => {
        io.emit('c1', data2);
    });

    socket.on('b3', (data3) => {
        io.emit('c1', data3);
    });

    socket.on('b4', (data4) => {
        io.emit('c1', data4);
    });


});