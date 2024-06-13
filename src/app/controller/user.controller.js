import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';

import User from '../models/User';

class UserController {
    async store(req, res) {
        const schema = Yup.object({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password_hash: Yup.string().min(6).required(),
            admin: Yup.boolean(),
        });

      
        try{
            schema.validateSync(req.body,{abortEarly:false});
        }catch(err){
            return res.status(400).json({error:err.errors})
        }
       


        try {
            const { name, email, password_hash, admin } = req.body;

            const user = await User.create({
                id: uuidv4(),
                name,
                email,
                password_hash,
                admin,
            });

            return res.status(201).json({
                id: user.id,
                name: user.name,
                email: user.email,
                admin: user.admin,
            });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to create user' });
        }
    }
}

export default new UserController();