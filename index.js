const express = require('express')
const app = express()
const port = 8000
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//request to add an item to a watchlist
//ใช้ all() เพื่อให้รองรับการทดสอบได้ทั้ง POST และ GET 
app.all('/api/add-watchlist', (request, response) => {
	//for method POST
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

//request to remove an item from a watchlist
app.all('/api/remove-watchlist', (request, response) => {
	
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