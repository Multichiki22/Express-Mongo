const exampleModel = require("../../models/example");
const handlePutExample = async (req, res) => {
  const { id } = req.params;
  const { exampleString, exampleNumber, exampleObject, exampleArray } =
    req.body;
  try {
    const updatedExample = await exampleModel.findByIdAndUpdate(id, {
      exampleString,
      exampleNumber,
      exampleObject,
      exampleArray,
    });
    res.status(200).json(updatedExample);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlePutExample;
