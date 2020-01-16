const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const petSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required'],
    minlength: [3, 'Must be pets full name'],
  },
  type: {
    type: String,
    trim: true,
    required: [true, 'type is required'],
    minlength: [3, 'Must be a notable type'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Must have a valid description'],
    minlength: [3, 'Must be a valid description'],
  },
  skill1: {
    type: String,
    trim: true,
    required: [false],
  },
  skill2: {
    type: String,
    trim: true,
    required: [false],
  },
  skill3: {
    type: String,
    trim: true,
    required: [false],
  },
});

petSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Pet', petSchema);
