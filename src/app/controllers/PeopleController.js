const mongoose = require('mongoose');
const Test = require('../models/test');

const PeopleController = {
    // [POST] /news
    index: async (req, res) => {
        try {
           
            const newTest = new Test(req.body)
            const newData = await newTest.save()
            res.status(200).json(newData);
        } catch (e) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
}

module.exports = PeopleController;


