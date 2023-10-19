// user.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  companies: [{ type: Schema.Types.ObjectId, ref: 'Company' }]
});

module.exports = mongoose.model('User', userSchema);

