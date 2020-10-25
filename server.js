const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 3000

//teste
app.get('/', (req, res) => {
	res.sendFile(__dirname+'/index.html')
})

io.on('connection', socket =>{
	console.log('new connection', socket)
})

http.listen(PORT, () => {

	console.log('listening on port 3000')
})
