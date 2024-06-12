
import {Router} from 'express';



import Usecontroller from './app/models/controller/Use.controller';


const routes = new Router()

routes.post('/users', Usecontroller.store)
   
    

export default routes