const express = require('express')
const app = express()

const PORT = process.env.PORT || 8877

app.get('/about', (req, res) => {
	res.json({
		name: 'Gabriel',
		email: 'lumbarque@outlook.com',
		urls: [
			{
				type: 'github',
				url: 'https://github.com/lumbarque-oficial'
			}
		]
	})
})

app.get('/', (req, res) => {
	res.json({
		msg: 'OK'
	})
})

app.listen(PORT, () => {
	console.log('escutando na porta: ' + PORT)
})