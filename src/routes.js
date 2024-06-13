
import {Router} from 'express';



import Usecontroller from './app/controller/user.controller';


const routes = new Router()

routes.post('/users', Usecontroller.store)
   
    

export default routes