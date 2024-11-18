var express =  require("express")  //function
const DatabaseConnect = require("./database")
const Blog = require("./model/blogmodel")
var app = express()
var cors = require("cors")


app.use(cors({
    origin : "http://localhost:5173"  // * for giving acces to all
}))

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
    await Blog.create({     //BLOG CRETA KO HALKA VANU PARO ????
        title : title,
        subtitle : subtitle,
        description : description
    })
    res.status(200).json({
        msg : "Blog success"
    })
})


app.get("/blog",async (req,res)=>{
    var blog = await Blog.find() //find lay array ma data dinxa
    res.status(200).json({
        data : blog
    })
})

app.get("/blog/:id",async(req,res)=>{
    var id = req.params.id         //params ko kam ????
    var blog = await Blog.findById(id) //always return object
    res.status(200).json({
        data:blog
    })

})

app.delete("/blog/:id",async (req,res)=>{
    var id = req.params.id
    await Blog.findByIdAndDelete(id)
    res.status(200).json({
        mes : "deleted successfully"
    })
})


app.patch("/blog/:id",async (req,res)=>{
    var id = req.params.id
    var{title,subtitle,description} = req.body
    await Blog.findByIdAndUpdate(id,{
        title : "sakar",
        subtitle : "paudel",
        description
    }) 
    res.status(200).json({
        mes : "updated"
    })
})


app.listen(3000,()=>{
    console.log("saksham")
})
