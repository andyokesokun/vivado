const express = require('express')
const session  = require('express-session')

const bodyParser = require('body-parser')
global.db = require('./db')


const routes = require('./routes')


const app = express()
app.set('view engine', 'pug')
app.set('views','./views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(session({
    secret: 'SecretKey',
    saveUninitialized:false,
    resave:true,
    cookie: { maxAge: 60000 * 60 * 1000 }})
  )

app.use(express.static('public'))

app.use(routes);


console.log(db)


const PORT = 500

app.listen(PORT, () => console.log( `listening on port ${PORT}` )  );



