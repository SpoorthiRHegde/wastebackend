const express = require('express');
const router = express.Router();
const { addComplaint, processComplaint, generateDailyLog, getAllComplaints } = require('../controllers/complaintController');

// Route to add a complaint
router.post('/add', (req, res) => {
    const { description, priority } = req.body;
    addComplaint(description, priority);
    res.send("Complaint added successfully.");
});

// Route to process the highest-priority complaint
router.post('/process', (req, res) => {
    processComplaint();
    res.send("Processed highest-priority complaint.");
});

// Route to generate a daily log
router.get('/generate-log', (req, res) => {
    generateDailyLog();
    res.send("Daily log generated.");
});

// **New Route to get all complaints**
router.get('/all', (req, res) => {
    const complaints = getAllComplaints();
    res.json(complaints);
});

module.exports = router;
