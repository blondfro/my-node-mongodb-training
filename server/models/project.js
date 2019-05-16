const mongoose = require('mongoose');

const requiredStringValidator = [
    //check that the length of the val passed in is not a series of spaces
    // and is at least 1 character long.
    (val) => {
        let testVal = val.trim();
        return (testVal.length > 0);
    },
    //custom error text.
    'Please supply a value for {PATH}'
];

const requiredMaxStringLength = [
    //check the length of the value passed.
    (val) => {
        let testVal = val.trim();
        return (testVal.length > 0 && testVal.length <= 200)
    },
    //custom error text
    '{PATH} must be between 1 and 50 characters long'
];

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: requiredStringValidator},
    description: {
        type: String,
        required: true,
        validate: requiredMaxStringLength},
    isActive: {
        type: Boolean,
        default: true,
        required: true}
});

module.exports = mongoose.model('Project', projectSchema);