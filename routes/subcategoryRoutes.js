const express = require("express");
const router = express.Router();
const {
  createSubcategory,
  getSubcategories,
} = require("../controllers/subcategoryController");

router.post("/", createSubcategory);
router.get("/", getSubcategories);

module.exports = router;
