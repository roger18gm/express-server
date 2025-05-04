import express from "express";
import { getData } from "../controllers/index.js";
import contactsRouter from './contacts.js';

const router = express.Router();

router.get("/", getData);
router.use("/contacts", contactsRouter)

export default router;