const film = require('../data')


module.exports = async (req, res) => {
    const films = await film.list()
    res.status (200). json(films)
};