// app.js - Main Server file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const creditRoutes = require('./routes/credit');

app.use(bodyParser.json());
app.use(cors());

// API Route for Credit Assessment
app.use('/api/credit', creditRoutes);

// Port Configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
