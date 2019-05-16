const mongoose = require('mongoose');

const sizeValidator = [
    //check the length of the value passed.
    (val) => {
        let testVal = val.trim();
        return (testVal.length > 0 && testVal.length <= 50)
    },
    //custom error text
    '{PATH} must be between 1 and 50 characters long'
];


const teamMemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: sizeValidator}
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);