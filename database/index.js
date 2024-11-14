var mongoose=require("mongoose")

async function DatabaseConnect(){
    await mongoose.connect("mongodb+srv://paudelsaksham7:sakar9805389497@cluster0.voxw3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("database success")
}

module.exports = DatabaseConnect
