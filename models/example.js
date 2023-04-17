const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema(
    {
        exampleString: {
            type: String,
            required: true
        },
        exampleNumber: {
            type: Number,
        },
        exampleObject: {
            example1: {
                type: String
            },
            example2:{
                type:String
            }
        },
        exampleArray: {
            type: Array,
            required: true,
            default: []
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('exampleModel', exampleSchema);