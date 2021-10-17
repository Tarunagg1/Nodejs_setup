
'use strict';
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const adminregistrationSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true,
        index: true
    },
    role: {
        type: String,
        default: 'admin'
    },
    isactive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true, versionKey: false });

adminregistrationSchema.plugin(uniqueValidator, { message: 'Duplicate Entry {PATH}' });

const userModal = mongoose.model('adminregistration', adminregistrationSchema);

module.exports = userModal;