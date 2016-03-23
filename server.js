var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))


io.on('connection', function(socket){
  console.log('  User Connected')
  
  //...  Referencing the raceClicks, we need to listen for something emitted here
  
})

io.on('disconnect', function(socket){
  console.log('  User Disconnected')
})


http.listen(3000, '0.0.0.0',function(){
  console.log(`listening on ${http.address().address} at: ${http.address().port}`)
})