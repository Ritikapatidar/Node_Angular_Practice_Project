const connection= require('./connection.ts').conn
const apiRouter= require('./routes/api')
const express= require('express')
const dotenv= require('dotenv')
const cors = require('cors')
const app= express()
dotenv.config();
app.use(cors('*'))
app.use(express.json())
connection.connect((err) => {
    if (err) return console.error(err.message);
    console.log('Connected to the MySQL server.');
  });

app.use('/api', apiRouter)
app.get('/', (req, res)=>{
    res.send("Server is running..")
})
app.listen(8001, ()=> console.log("Listening at port:8000"))
//    let server = http
//       .createServer(function (req, res) {
//         res.end('..')
//       })
//       .listen(8000)