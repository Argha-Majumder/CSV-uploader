const mongoose = require('mongoose');

const csvSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    file: {
        type: String
    }
}, {
    timestamps: true
});

const CSV = mongoose.model('CSV', csvSchema);

module.exports = CSV;