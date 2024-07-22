require('dotenv').config()
const express=require("express")
const app=express()
const port=3000
const expresslayout=require("express-ejs-layouts")
const connectdb=require("./server/config/db")
connectdb()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(expresslayout)
app.use(express.static('public'))
app.set('layout','./layouts/main')
app.set('view engine','ejs')
// app.locals.isActiveRoute=isActiveRoute;
app.use('/',require("./server/routes/main"))

app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})