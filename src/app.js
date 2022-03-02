const express = require('express')
const path = require('path')
const read = require('./utils/read')
const create = require('./utils/write')
const update = require('./utils/update')
const del = require('./utils/delete')

const app = express()

// const filePath = path.join(__dirname, '../public')

// app.set('view engine', 'hbs')
// app.use(express.static(filePath))

// app.get('', (req, res) => {
//     console.log(req.query)
//     res.render('index', {
//         title : 'app',
//     })
// })
app.get('/create', (req,res) => {
    create()
})

app.get('/read', (req,res) =>{
    //console.log(req.query)
    read()
})


app.get('/update', (req,res) => {
    update()
})

app.get('/delete', (req,res) => {
    del()
})

// app.get('/help', (req, res) => {
//     res.send({
//     })
// })





app.listen(3000, () =>{
    console.log("server is running.")
})