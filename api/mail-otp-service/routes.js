'use strict';

const { sendMailOtp, verifyMailOtp } = require('./controller');
const router = require('express').Router();

/**
 *  not register user email otp send
*/
router.post('/sendotp/email',sendMailOtp);
router.post('/verifyotp/email',verifyMailOtp);


module.exports = router;