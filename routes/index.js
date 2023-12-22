const express = require("express");
const router = express.Router();
const commonController = require("../controllers/commonController");

router.post("/login", commonController.userLogin);
router.get("/clients", commonController.getClients);

module.exports = router;
