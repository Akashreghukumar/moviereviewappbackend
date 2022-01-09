const express=require("express");
const app=express()

const port=process.env.PORT || 3001

const mongo=require('./shared/connection');

const cors=require('cors')
// const user=require('./routes/movies')
const registerRouter=require('./routes/register')
const userRouter=require('./routes/user')

const authorize=require('./module/authorize')

const movieRouter=require('./routes/movie')

app.use(express.json())
// console.log(mongo)
 mongo.connect()

 app.use(cors())
//  app.use('/user',user)
 app.use('/register',registerRouter)

 app.use(authorize.Authorize)
//  app.use(authorize.isadmin)
app.use('/user',userRouter)
app.use('/movie',movieRouter)
app.listen(port,()=>{
    console.log("server runnin",{port})
}) 