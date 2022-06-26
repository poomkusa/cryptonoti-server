const express = require('express')
const app = express()
const port = 8000
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//ใช้ all() เพื่อให้รองรับการทดสอบได้ทั้ง POST และ GET 
app.all('/api/add-watchlist', (request, response) => {
	/* let crypto = request.body.crypto
	let condition = request.body.condition || ''
	let threshold = request.body.threshold || '' */
	
	//capture get request payload
	let crypto = request.query.crypto || ''
	let condition = request.query.condition || ''
	let threshold = request.query.threshold || ''
	
	//send response
	let text = `crypto: ${crypto}, condition: ${condition}, threshold: ${threshold}`
	response.send(text)
})

app.listen(port, () => {
	console.log('Server listening on port ' + port)
})