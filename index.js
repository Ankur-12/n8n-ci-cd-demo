const express=require("express");
const app=express();
const port=3000;



//adding middlewares
app.use(express.json());

//get request
app.get("/",(req,res)=>{
    res.send("<h1>This is a Heading</h1>") 
})

app.post("/car",(req,res)=>{
    res.send("This is post route")
})
app.listen(port,()=>{
    console.log("App chal rha hai hamara port pe ")
})