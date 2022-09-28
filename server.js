const app=require('./app')
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/test',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection to database eshtablished")
}).catch(err=> console.log(err))

const server=app.listen('3000',()=>{
    console.log("server strted at port 3000");
})