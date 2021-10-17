'use strict';
const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    clinicid: {
        type: String,
        required: true,
        index: true
    },
    clinicname: {
        type: String,
        default: 'doccheck'
    },
    clinic_email: {
        type: String,
        unique: true
    },
    clinic_phonenumber: {
        type: Number,
        unique: true
    },
    address: {
        type: String,
        default: 'india'
    },
    speciality: {
        type: String,
        default: null
    },
    clinic_starttime: {
        type: String,
        default: null
    },
    clinic_endtime: {
        type: String,
        default: null
    },
    isactive:{
        type:Boolean,
        default:true
    }
}, { timestamps: true });

hospitalSchema.plugin(uniqueValidator, { message: 'Duplicate Entry {PATH}' });

module.exports = mongoose.model("otpverify", hospitalSchema);
