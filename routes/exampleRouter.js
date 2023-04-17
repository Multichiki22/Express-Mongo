const express = require('express');
const router = express.Router();

const getHandler = require("../controllers/exampleCRUD/getExample")
const postHandler = require("../controllers/exampleCRUD/postExample")
const putHandler = require("../controllers/exampleCRUD/putExample")
const deleteHandler = require("../controllers/exampleCRUD/deleteExample")

router.get("/", getHandler)
router.post("/", postHandler)
router.put("/:id", putHandler)
router.delete("/", deleteHandler)

module.exports = router;