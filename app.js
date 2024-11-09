const express = require('express');
const app = express();
const complaintRoutes = require('./routes/complaintRoutes');

// Middleware to parse JSON
app.use(express.json());

// Mount complaint routes at /complaints
app.use('/complaints', complaintRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
    res.send("Server is working!");
});
