const express = require('express');
const router = express.Router();

const exampleRouter = require('./exampleRouter')

router.use('/example', exampleRouter)

module.exports = router;