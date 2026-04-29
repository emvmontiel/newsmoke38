// This is the particular file for the users
// This is where paths are handled

import { Router } from 'express'
import { registerUser } from '../controllers/user.controller';

// Router is a tool that helps us get routes in express
// Express is the framework which handles the routes; router is the tool we are going to use

const router = Router();

router.post('/register').post(registerUser);

export default router;