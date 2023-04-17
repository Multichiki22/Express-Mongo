const exampleModel = require("../../models/example");
const handleGetExample = async (req, res) => {
  try {
    const allExamples = await exampleModel.find()
    res.status(200).json(allExamples)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handleGetExample