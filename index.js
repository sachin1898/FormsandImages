const express=require('express')
const app=express()

app.listen(3000,(req,res)=>{
    console.log("server is running at port 3000");
})

app.set("view engine",'ejs')
//bina iske json will not render in express
app.use(express.json())
app.use(express.urlencoded())

app.get("/myget",(req,res)=>{
    console.log(req.body);
    res.send(req.body)
})

app.get("/mygetform",(req,res)=>{
    res.render("getformm")
})

app.get("/mypostform",(req,res)=>{
    res.render("postformm")
})