const express = require("express")
const session = require("express-session")
const app = express()
const dataservice = require('./services/data.service')
const cors = require('cors')

app.use(session({
    secret: "randomsecurestring",
    resave: false,
    saveUninitialized: false
}))

app.use(cors({
    origin: "http://localhost:4200",
    credentials: true
}))

app.use(express.json())



app.post('/register', (req, res) => {
    dataservice.register(req.body.uname, req.body.acno, req.body.pswd)
        .then(result => {
            res.status(result.statusCode).json(result)
        })


})

app.post('/login', (req, res) => {
    dataservice.login(req, req.body.acno, req.body.pswd)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})

app.post('/add', (req, res) => {
    dataservice.add(req.body.acno, req.body.date, req.body.evnt)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})

app.post('/getReminders', (req, res) => {
    console.log(req)
    dataservice.getReminders(req.body.acno)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})

app.delete('/deleteAcc/:acno',(req,res)=>{
    dataservice.deleteAcc(req.params.acno)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})


app.listen(3003, () => {
    console.log("server started at port number:3003")
})