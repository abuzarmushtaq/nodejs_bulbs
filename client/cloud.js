var five = require("johnny-five");
var Raspi = require("raspi-io");
var socket = require('socket.io-client')('http://192.168.15.98:8080');



var board = new five.Board({
    io: new Raspi()
});

board.on("ready", function () {
    var led = new five.Led("GPIO16");


    socket.on('server', function () {
        console.log('Connected to server!');
    });

    socket.on('c1', function (data1) {
        if (data1 == 0) { led.on() }
        if (data1 == 1) { led.off() }
    });

    
});
socket.emit('client connected')