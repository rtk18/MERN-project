const express = require("express");
const { get } = require("mongoose/lib/schematype");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
  getTopFiveProducts,
} = require("../controllers/product");

router.route("/").get(getTransactions).post(addTransaction);

router.route("/:id").delete(deleteTransaction);

router.route("/getTopFiveProducts").get(getTopFiveProducts);

module.exports = router;
