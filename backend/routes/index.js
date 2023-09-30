import express from "express";
import { Login, Register, getUsers } from "../Controller/Users.js";
import { verifyToken } from "../Repository/midleware/verifyToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);

export default router;