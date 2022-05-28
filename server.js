const http = require("http")
const fs = require('fs')

const requestListener = (req, res) => {
	if (req.url.endsWith('.png')) {
		let png = fs.readFileSync(`${__dirname}${req.url}`)
		res.setHeader('Content-Type', 'image/png')
		return res.end(png)
	}
	let html = fs.readFileSync(`${__dirname}/index.html`)
	res.setHeader('Content-Type', 'text/html')
	res.end(html)
}

const server = http.createServer(requestListener)

server.listen(8080, '0.0.0.0')