const express = require(`express`)
const { getFruits } = require(`./controllers/fruitController.js`)
const { getFruit } = require(`./controllers/fruitController.js`)
const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => console.log(`Server listening on port ${PORT} `))

app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
})

app.get(`/greet/:name`, (req,res)=>{
    res.send(`Why hello there, ${req.params.name}`) 
})

const five = [1,2,3,4,5]

app.get(`/five`, (req,res)=>{
    res.send(five)
})

app.get(`/fruits`, getFruits)

app.get(`/fruits/:name`, getFruit)