const express = require("express")
const router = express.Router()

let productsControllers = require("../controllers/productsControllers")

router.get("/", productsControllers.list)
router.get("/:_id", productsControllers.show)
router.post("/", productsControllers.create)

module.exports = router