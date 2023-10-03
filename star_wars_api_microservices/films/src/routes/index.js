const { Router } = require("express");
const controllers = require("../controllers");
const { filmsValidationMdlw } = require("../middlewares/filmsValidationBody");

const router = Router();

router.get("/", controllers.getAll);
router.get("/:id", controllers.getOne);
router.post("/", filmsValidationMdlw, controllers.create);
router.put("/:id", filmsValidationMdlw, controllers.update);
router.delete("/:id", controllers.remove);

module.exports = router;
