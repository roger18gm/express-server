import { createNewContact, deleteContactById, getAllContacts, getContactById, updateContactById } from '../controllers/contacts.js';
import express from "express";

const router = express.Router();

// this is /contacts because it is defined in the routes/index.js file
router.get("/", getAllContacts);

// then this will be /contacts/:id
router.get("/:id", getContactById);

router.post("/", createNewContact);

router.put("/:id", updateContactById);

router.delete("/:id", deleteContactById)

export default router;