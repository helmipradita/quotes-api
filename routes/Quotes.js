const express = require('express');
const router = express.Router();
const Quote = require('../models/Quotes');

//Get all routes
router.get('/', (req, res) => {
    res.send("Get all routes");
});

//Create new quote
router.post('/new', async (req, res) => {
    const newQuote = new Quote(req.body);

    const savedQuote = await newQuote.save();

    res.json(newQuote);
});

module.exports = router;