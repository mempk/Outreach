import  {addNewClient} from '../controllers/AppController.js';



const routes = (app)=>{

    app.route('/generalstudies')
        .post(addNewClient);

}

export default routes;
