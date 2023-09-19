const Character = require("../data")


module.exports = async (req,res) => {
    const characters = await Character.list();
    res.status(200).json(characters);
};