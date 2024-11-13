var express =  require("express")  //function
var app = express()

app.get("/",(req,res)=>{
    res.json({
        m : "bye world"
    })
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})

app.get("/contact",(req,res)=>{
    res.send("Contact Page")
})

app.post("/register",(req,res)=>{
    res.json({
        m : "register page"
    })
})


app.listen(3000,()=>{
    console.log("saksham")
})
