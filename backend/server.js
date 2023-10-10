const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const app = express()
require('dotenv').config();


app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});


app.get('/',(req,res) => {
    const sql = 'SELECT * FROM users'
    db.query(sql,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})



app.post('/kontrolloUser', (req, res) => {
    const { email, password } = req.body;

    const user = 'SELECT * FROM users WHERE Email_of_user = ? AND Password_of_user = ?';


    db.query(user, [email, password], (err, results) => {
      if (err) {
      return res.json({ error: 'Internal server error' });
      }

      if (results.length > 0) {

        // Useri egziston , kthe pergjigje pozitive
        return res.json({ userEgziston: true });

      } else {
        // Useri nuk egziston , kthe pergjigje negative
        
        return res.json({ userEgziston: false });
      }
    });
  });
  
  


app.post('/create',(req,res) => {
    const newUser = 'INSERT INTO users(`Name_of_user`,`Email_of_user`,`Password_of_user`) VALUES (?);'
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    db.query(newUser,[values],(err,data) => {

        if(err) return res.json('Error whhile posting a new values')
        return res.json(data)
    })
})




app.listen(5000,() => {
    console.log('LISTENING on port 5000')
})