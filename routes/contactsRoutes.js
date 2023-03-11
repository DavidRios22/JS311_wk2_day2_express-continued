const express = require("express")
const router = express.Router()

let contactsControllers = require("../controllers/contactsControllers")

router.get("/", contactsControllers.list)
router.get("/:_id", contactsControllers.show)
router.post("/", contactsControllers.create)

module.exports = router