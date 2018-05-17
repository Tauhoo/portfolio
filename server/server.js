import React from 'react'
import express from 'express'
import path from 'path'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import App from './../src/App'

const sheet = new ServerStyleSheet()
const app = express()
const html = renderToString(sheet.collectStyles(<App/>))
const styleTags = sheet.getStyleTags()
app.use(express.static(path.resolve('public/image')))

app.get('/script',(req,res)=>{
  res.sendFile(path.resolve('public/script.js'))
})

app.get('/',(req,res)=>{
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>tauhoo</title>
        </head>
        <body>
          <style>
            body {
              padding: 0px;
              margin: 0px;
              overflow: hidden;
              background-color: black;
            }
          </style>
          ${styleTags}
          <div id="root">
            ${html}
          </div>
          <script type="text/javascript" src="/script"></script>
        </body>
      </html>
    `)
})

app.listen(8888,()=>{
  console.log('server is runing on port 8888')
})
