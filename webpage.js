const express = require('express')

const app = express()

// app.get('/hello/:hai',async(req,res)=>{
//     res.send(`${req.params.hai}`)
// })

app.get('/myData/:hai',async(req,res)=>{
    res.send(`Received data is ${req.params.hai}`)
})

app.get('/myData',async(req,res)=>{
    res.send(`Hi people ! What's up ?`)
})

app.get('/conversion/:value1/:value2',async(req,res)=>{
    let val1 = parseInt(req.params.value1)
    let val2 = parseInt(req.params.value2)
    res.status(200).json({"message":val1*val2})
})

app.listen(1234,()=>{
    console.log("Server is running on port 1234")
})