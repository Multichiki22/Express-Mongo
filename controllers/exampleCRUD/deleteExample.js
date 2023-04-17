const exampleModel = require("../../models/example");
const handleDeleteExample = async (req, res) => {
  const { exampleString } = req.body;
  try {
    const deletedExample = await exampleModel.findOneAndDelete({ exampleString });
    res.status(200).json(deletedExample);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handleDeleteExample;
