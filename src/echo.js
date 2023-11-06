import io from 'socket.io-client';
const socket = io.connect('ws://' + '127.0.0.1' + ':' + 101801);

socket.on('whoareyou', () => {
  socket.emit('apply','t_all')
})

socket.on('datasport', args => {
  console.log(args)
})