var socket = io();


var button = document.getElementsByClassName('btn');

button[0].addEventListener('change', function () {
    socket.emit('b1', Number(this.checked));
});
button[1].addEventListener('change', function () {
    socket.emit('b2', Number(this.checked));
});

button[2].addEventListener('change', function () {
    socket.emit('b3', Number(this.checked));
});

button[3].addEventListener('change', function () {
    socket.emit('b4', Number(this.checked));
});

