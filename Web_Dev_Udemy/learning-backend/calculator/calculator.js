const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/bmicalculator', (req,res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
} )

app.post('/', (req,res) => {
    let height = Number(req.body.height)
    let weight = Number(req.body.weight)

    let bmi = weight/(height*height)
    res.send("Your BMI is: " + bmi)
})

app.post('/', (req,res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1+num2
    res.send("The result of the calculation is: " + result)
})

app.listen(3001, () => console.log("Server started at Port:3001"))