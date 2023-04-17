const exampleModel = require("../../models/example")
const handlePostExample = async(req, res)=>{
    const {exampleString, exampleNumber, exampleObject, exampleArray} = req.body
    try {
        await exampleModel.create({exampleString, exampleNumber, exampleObject, exampleArray})
        res.sendStatus(201)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = handlePostExample