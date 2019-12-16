const express = require('express')
const bodyParser = require('body-parser')
const port = 8081;
const hostname = 'localhost';
const mysql = require('mysql')

const app = express();

// setup the middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);//attach body-parser middleware
app.use(bodyParser.json());//parse json data

const db = mysql.createConnection({
    host:'localhost',
    port:3306,
    user: 'admin',
    password: 'password',
    database:'library'
})

db.connect();

// routes
// maps a URL to a function
app.get('/', (request,response)=>{
    response.send("<h1>Hello World</h1>");
})

app.get('/about-us', (req,res)=>{
    res.send("<h1>About Us</h1>")
})

// API
app.get('/api/user', (req,res)=>{
    return res.json({
        name:'Ah Kow',
        age: 32,
        gender:'M'
    })
})

app.get('/api/books', (req,res)=>{
    const query = `
    SELECT * FROM books
    `;
    
    db.query(query, (err, results)=>{
        res.json(results)
    })
})



// THIS ALWAYS AT THE END OF THE FILE
app.listen(port, hostname, () => {
    console.log(`Server started and accessible via http://${hostname}:${port}/`);
  });


