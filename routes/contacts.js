import { getAllContacts, getContactById } from '../controllers/contacts.js';
import express from "express";

const router = express.Router();

// this is /contacts because it is defined in the routes/index.js file
router.get("/", getAllContacts);

// then this will be /contacts/:id
router.get("/:id", getContactById);

export default router;