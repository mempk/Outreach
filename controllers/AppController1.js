

import mongoose from 'mongoose';
import {AppSchema} from '../models/AppModels'


const NewClient = mongoose.model('NewClient',AppSchema);


export const getClient = (req, res)=>{

   

    NewClient.find({},(err, NewClient)=>{
        if(err){

            res.send(err);

        }

        res.json(NewClient)
    });
}



