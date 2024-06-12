import { v4 as uuidv4 } from 'uuid';
import User from '../User';

class UserController {
    async store(req, res) {
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
