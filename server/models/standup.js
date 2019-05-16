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

const standupSchema = new mongoose.Schema({
    teamMemberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teamMembers'
    },
    teamMember: {type: String, required: true},
    project: {
        type: String,
        required: true,
        validate: requiredStringValidator},
    workYesterday: {
        type: String,
        required: true,
        validate: requiredStringValidator},
    workToday: {type: String, required: true},
    impediment: {
        type: String,
        required: true,
        default: 'None',
        validate: requiredStringValidator},
    createdOn: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Standup', standupSchema);