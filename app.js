var express =  require("express")  //function
const DatabaseConnect = require("./database")
const Blog = require("./model/blogmodel")
var app = express()

app.use(express.json())

DatabaseConnect()


app.get("/",(req,res)=>{
    res.json({
        m : "bye world"
    })
})

app.post("/blog",async (req,res)=>{
    console.log(req.body)
    var title = req.body.title
    var subtitle = req.body.subtitle
    var description = req.body.description
    // alternative var {title,subtitle,descripiton} = req.body
    await Blog.create({
        title : title,
        subtitle : subtitle,
        description : description
    })
    res.json({
        msg : "Blog success"
    })
})


app.get("/blog",async (req,res)=>{
    var blog = await Blog.find() //find lay array ma data dinxa
    res.json({
        data : blog
    })
})

app.listen(3000,()=>{
    console.log("saksham")
})
