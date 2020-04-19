

import mongoose from 'mongoose';
import {AppSchema} from '../models/AppModels'


const NewClient = mongoose.model('NewClient',AppSchema);


export const deleteClientInfo = (req, res)=>{

   

    NewClient.deleteOne({_id: req.params.ClientID},(err, NewClient)=>{
        if(err){

            res.send(err);

        }

        res.json({message:'Successfully deleted Client'})
    });
}



