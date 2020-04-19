import  {getClient} from '../controllers/AppController1.js';


const routes1 = (app)=>{

    app.route('/admin/viewdata')
        .get(getClient);

}

export default routes1;