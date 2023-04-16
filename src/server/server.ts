// // server/server.ts
import express from 'express'
 
const server = express()
 
// server.get('/', (req, res) => {
//   res.send('Hello from Server')
// })
 
// server.listen(3000, () => {
//   console.log(`Server running on http://localhost:3000`)
// })


// server/server.ts
// import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { App } from '../client/components/app'
 
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))
 
server.use('/static', express.static(path.join(__dirname, 'client/static')))
 
const manifest = fs.readFileSync(
  path.join(__dirname, 'static/manifest.json'),
  'utf-8'
)
const assets = JSON.parse(manifest)
 

server.get('/', (req, res) => {

  // const component = ReactDOMServer.renderToString(React.createElement(App))
  // res.render('client', { assets, component })
})

server.get("/client", (req, res) => {
  res.sendFile(path.join(__dirname, "client",   "index.html"));
});


// server.get('/client', (req, res) => {

//   const component = ReactDOMServer.renderToString(React.createElement(App))
//   res.render('client', { assets, component })
// })

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`)
})
