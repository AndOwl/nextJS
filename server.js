const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler()

app.prepare()
	.then(() => {
		const server = express()

		server.get('/details/:id', (request, response) => {
			const page = '/details'
			const query = {id: request.params.id}
			app.render(request, response, page, query)
		})

		server.get('*', (req, res) => {
			return handle(req, res)
		})

		server.listen(3000, (err) => {
			if (err) throw err
			console.log('Server on air http://localhost:3000')
		})
	})
	.catch((ex) => {
		console.error(ex.stack)
		process.exit(1)
	})