const Complaint = require('../models/complaintModel'); // Adjust the path as needed
const { createObjectCsvWriter } = require('csv-writer');
const complaintsQueue = [];  // Main queue for pending complaints
const resolvedStack = [];    // Stack for resolved complaints

function addComplaint(description, priority) {
    const newComplaint = new Complaint(description, priority);
    complaintsQueue.push(newComplaint);
    console.log("Complaint added:", newComplaint);
}

function processComplaint() {
    if (complaintsQueue.length === 0) {
        console.log("No complaints to process.");
        return;
    }

    // Sort the queue to process high-priority complaints first
    complaintsQueue.sort((a, b) => (a.priority === 'high' ? -1 : 1));

    // Remove and resolve the highest-priority complaint
    const complaintToResolve = complaintsQueue.shift();
    complaintToResolve.status = 'resolved';
    resolvedStack.push(complaintToResolve);

    console.log("Resolved complaint:", complaintToResolve);
}


// Function to generate daily CSV log
function generateDailyLog() {
    const csvWriter = createObjectCsvWriter({
        path: 'data/complaints.csv',
        header: [
            { id: 'id', title: 'ID' },
            { id: 'description', title: 'Description' },
            { id: 'priority', title: 'Priority' },
            { id: 'status', title: 'Status' },
            { id: 'timestamp', title: 'Timestamp' }
        ]
    });

    csvWriter.writeRecords(resolvedStack)
        .then(() => console.log('Daily log created.'));
}
function getAllComplaints() {
    return complaintsQueue;
}

module.exports = { addComplaint, processComplaint,getAllComplaints, generateDailyLog };
