const express = require("express")
const router = express.Router()

let commentsControllers = require("../controllers/commentsControllers")

router.get("/", commentsControllers.list)
router.get("/:_id", commentsControllers.show)
router.post("/", commentsControllers.create)

module.exports = router