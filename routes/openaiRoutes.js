const express = require('express')
const router = express.Router();
const {imageGen} = require('../controllers/openaiControllers')

router.post('/generator', imageGen)


module.exports = router