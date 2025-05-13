import express from "express";
import { getData } from "../controllers/index.js";
import contactsRouter from './contacts.js';
import swaggerRouter from "./swagger.js";

const router = express.Router();

router.get("/", getData);
router.use("/contacts", contactsRouter);
router.use("/api-docs", swaggerRouter);


export default router;