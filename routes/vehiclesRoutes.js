const express = require("express")
const router = express.Router()

let vehiclesControllers = require("../controllers/vehiclesControllers")

router.get("/", vehiclesControllers.list)
router.get("/:_id", vehiclesControllers.show)
router.post("/", vehiclesControllers.create)

module.exports = router