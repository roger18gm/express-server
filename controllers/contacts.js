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
    const id = req.params.id;
    try {
        const result = await mongodb.getDb().db().collection("contacts").findOne({ _id: new ObjectId(id) });
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