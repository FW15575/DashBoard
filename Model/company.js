// company.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: String,
  // Define other company fields as needed
});

module.exports = mongoose.model('Company', companySchema);
