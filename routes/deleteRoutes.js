import {deleteClientInfo} from '../controllers/deleteController.js';


const deleteRoutes = (app)=>{

    app.route('/admin/:ClientID')
        .delete(deleteClientInfo);
        
}

export default deleteRoutes;