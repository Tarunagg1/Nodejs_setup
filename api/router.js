const router = require('express').Router();
const adminRutes = require('./admin-service/routes');

router.use('/admin',adminRutes)








module.exports = router;

