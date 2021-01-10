const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	console.log(req.url)

	const publicFolder = './public';

	let body = null;

	try {
		body = fs.readFileSync(`${publicFolder}${req.url}`)
	} catch (err) {
		console.log(err);
		body = fs.readFileSync(`${publicFolder}/index.html`)
	}
	res.end(body)
})

const port = process.env.PORT || 3800
server.listen(port)

console.log('Server started')