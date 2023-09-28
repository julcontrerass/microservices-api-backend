const { Router } = require ("express")
const controllers = require('../controllers')

const router = Router()


router.get('/', controllers.getPlanets)
router.post('/', controllers.createPlanet) 

module.exports = router