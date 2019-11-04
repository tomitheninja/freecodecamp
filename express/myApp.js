const express = require('express');
const app = express();
const { join } = require('path')
const bodyParser = require('body-parser')

// --> 7)  Mount the Logger middleware here
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
})

// --> 11)  Mount the body-parser middleware  here
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/** 1) Meet the node console. */
console.log('Hello World')

/** 2) A first working Express Server */
//app.get('/', (req, res) => {
//  res.send('Hello Express')
//})

/** 3) Serve an HTML file */
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'views/index.html'))
})

/** 4) Serve static assets  */
app.use('/', express.static(join(__dirname, 'public')))

/** 5) serve JSON on a specific route */
app.get('/json', (req, res) => {
  const msg_template = 'Hello json'
  const message = process.env.MESSAGE_STYLE === 'uppercase' ? msg_template.toUpperCase() : msg_template
  res.json( { message } )
})

/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */

app.get('/now', [
  (req, res, next) => {
    req.time = new Date().toString()
    next()
  },
  (req, res) => {
    res.json({time: req.time})
  }
])
/** 9)  Get input from client - Route parameters */

app.get('/:word/echo', (req, res) => {
  res.json({echo: req.params.word})
})

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

app.post('/name', (req, res, next) => {
  req.data = req.body
  next()
})

app.get('/name', (req, res, next) => {
  req.data = req.query
  next()
})
  

app.all('/name', (req, res) => {
  const {first, last} = req.data
  res.json({name: `${first} ${last}`})
})
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
