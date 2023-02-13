const express = require("express");
const router = express.Router();

const { createUser, userSignIn } = require("../controllers/user.js");

const { isAuth } = require("../middlewares/validation/auth");
const {
  validateUsersSignUp,
  userValidation,
  validateUsersSignIn,
} = require("../middlewares/validation/user");
const {
  validateSubject,
} = require("../middlewares/validation/subjectValidation");
const {
  createSubject,
  getSubjects,
  deleteSubjects,
} = require("../controllers/subject");
const {
  validateActivity,
} = require("../middlewares/validation/activityValidation");
const {
  createActivity,
  getActivity,
  deleteActivity,
  getAllActivity,
} = require("../controllers/activity");
const {
  validateResources,
} = require("../middlewares/validation/resourcesValidation");
const { resources } = require("../controllers/resources");
const { createGrade, getAllGrades } = require("../controllers/grade");

router.post("/create-user", validateUsersSignUp, userValidation, createUser);
router.post("/sign-in", validateUsersSignIn, userValidation, userSignIn);

router.post("/create-subject", isAuth, createSubject);
router.get("/subject", isAuth, getSubjects);
router.delete("/delete-subject", isAuth, deleteSubjects);
router.delete("/delete-activity", isAuth, deleteActivity);

router.post("/create-activity", isAuth, createActivity);
router.get("/activity", isAuth, getActivity);
router.get("/activity-all/:subjectId", isAuth, getAllActivity);
router.post("/add-grade", isAuth, createGrade);
router.get("/getAllGrade", isAuth, getAllGrades);
router.post("/resources", validateResources, resources);
module.exports = router;
