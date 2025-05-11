import mongodb from '../db/mongoConnect.js';
import { ObjectId } from 'mongodb';

export const getAllContacts = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection("contacts").find();
    result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(lists);
    })
};

export const getContactById = async (req, res, next) => {
    const contactId = req.params.id;
    try {
        const result = await mongodb.getDb().db().collection("contacts").findOne({ _id: new ObjectId(contactId) });
        if (!result) {
            res.status(404).json({ message: "Couldn't find that contact." });
        } else {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(result);
        }

    } catch (err) {
        res.status(500).json({ message: "Possible server error. ", error: err.message });
    }
};

export const createNewContact = async (req, res, next) => {
    const newContact = req.body;

    if (
        !newContact.firstName ||
        !newContact.lastName ||
        !newContact.email ||
        !newContact.favoriteColor ||
        !newContact.birthday
    ) {
        return res.status(400).json({
            message: "Missing required fields. Please include firstName, lastName, email, favoriteColor, and birthday."
        });
    }

    try {
        const result = await mongodb.getDb().db().collection("contacts").insertOne(newContact);

        res.status(201).json({
            message: "New contact created successfully.",
            contactId: result.insertedId
        });
    } catch (err) {
        console.error("Database insert failed:", err);
        res.status(500).json({
            message: "Failed to create contact due to server error.",
            error: err.message
        });
    }
};


export const updateContactById = async (req, res, next) => {
    const contactId = req.params.id;
    const updatedContact = req.body;

    try {
        const result = await mongodb.getDb().db().collection("contacts")
            .updateOne({ _id: new ObjectId(contactId) }, { $set: updatedContact });

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Contact not found." });
        }

        res.status(204).json({ message: "Contact updated successfully." });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

export const deleteContactById = async (req, res, next) => {
    const contactId = req.params.id
    try {
        const result = await mongodb.getDb().db().collection("contacts").deleteOne({ _id: new ObjectId(contactId) })
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Contact not found." });
        }

        res.status(200).json({ message: "Contact deleted successfully." });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};