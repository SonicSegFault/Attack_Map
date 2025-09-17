const express = require("express");
const router = express.Router();
const { createattack, getAttack } = require("../controllers/attackControllers");

router.post("/createattack", createattack);
router.get("/getattacks", getAttack);

module.exports = router;

