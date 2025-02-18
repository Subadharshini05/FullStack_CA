const express = require('express');

const app  = express();
app.use(express.json())
app.post('/signup',(req,res)=>{
    const {name,email,password}= req.body;
    if(!name || !email || !password){
        res.status(400).json({message:"All fields are required"});
    }
    if(password.length<6){
        res.status(400).json({message:"Password must be at least 6 characters"});
    }
    if(!email || !/\S+@\S+\.\S+/.test(email)){
        res.status(400).json({message:"Invalid email"});
    }
    res.status(201).json({message:"User created"});
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})