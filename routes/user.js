const express = require("express");

const router = express.Router();

const {
  handleGetAllUsers,
  handlegetUserbyID,
  handleupdateUserbyID,
  handledeleteUserByID,
  handlecreateNewUser,
} = require("../controllers/user");

router.route("/").get(handleGetAllUsers).post(handlecreateNewUser);

//if the routes are same
router
  .route("/:id")
  .get(handlegetUserbyID)
  .patch(handleupdateUserbyID)
  .delete(handledeleteUserByID);

module.exports = router;
