import express from 'express';
import  mongoose from 'mongoose';
import router from "./routes/user-routes.js";
import blogRouter from './routes/blog-routes.js';
// //importing routes files


const app = express();
app.use(express.json())// all the data will be passrd as json format

app.use("/api/user",router); //using router api // http://localhost:5000/api/user/login
app.use("/api/blog", blogRouter);
//connect with the database
mongoose.connect('mongodb+srv://admin:zLPz2kTcg7pMloFe@cluster0.tacraz4.mongodb.net/Blog?retryWrites=true&w=majority')
.then(()=>app.listen(5000))
.then(()=>console.log("connected to the DATABASE & listebning to port 5000"))
.catch((err)=>console.log(err));


//zLPz2kTcg7pMloFe