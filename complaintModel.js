class Complaint {
    constructor(description, priority) {
        this.id = Complaint.incrementId(); // Assuming you have a way to increment ID
        this.description = description;
        this.priority = priority;
        this.status = 'pending';
        this.timestamp = new Date();
    }

    static incrementId() {
        if (!this.currentId) {
            this.currentId = 1; // Start ID at 1
        }
        return this.currentId++;
    }
}
module.exports = Complaint;
