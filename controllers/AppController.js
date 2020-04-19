

import mongoose from 'mongoose';
import {AppSchema} from '../models/AppModels.js'


const NewClient = mongoose.model('NewClient',AppSchema);



export const addNewClient = (req, res)=>{

    let newData = new NewClient(req.body);

    newData.save((err, NewClient)=>{
        if(err){

            res.send(err);

        }

        res.json(NewClient)
    })
}



