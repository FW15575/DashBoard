const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/thapaatechnical/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const User = require('./models/user'); // Create a user model file
const Company = require('./models/company'); // Create a company model file

app.use(bodyParser.json());

// Define your API routes here
// For example:
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/companies', require('./routes/companyRoutes'));

const companies = ['Trishala', 'Shanti', 'F-31'];


// API endpoint to get the list of companies
app.get('/api/companies', (req, res) => {
    res.json(companies);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
