import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import history from 'connect-history-api-fallback';
import routes from './routes/RecruitmentRoutes';
import routes1 from './routes/RecruitmentRoutes2';
import deleteRoutes from './routes/deleteRoutes'



var mongodb = require('mongodb');
var path = require('path'); 
const app = express();



//mongo connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://csci202:Olemiss@2020@cluster0-x0tez.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).catch(err => console.log(err))


//bodyparser setup

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());


app.use(cors());
app.use(history({verbose:true}))
const PORT = process.env.PORT;

routes(app);
routes1(app);
deleteRoutes(app);

app.use(express.static(path.join(__dirname,'build')));




app.get('/',(req,res)=>{
     res.sendFile(path.join(__dirname),'build','index.html');
     res.redirect('/');
})


app.listen(PORT,()=>{

    console.log('Recruitment server running on port ')
})
