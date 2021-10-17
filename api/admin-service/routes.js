const { adminLogin, adminVerify } = require('./controller');
const { isAdminEmailExists } = require('./validator');
const { sendMailOtp, verifyMailOtp } = require('../mail-otp-service/controller')

const router = require('express').Router();


router.post('/login', isAdminEmailExists, sendMailOtp, adminLogin);
router.post('/verify', isAdminEmailExists, verifyMailOtp, adminVerify);



module.exports = router;

