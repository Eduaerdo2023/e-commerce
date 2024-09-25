import express from "express";
const router = express.Router();
import {
  createUser,
  deleteUser,
  getAllUsers,
  getCurrentUser,
  loginUser,
  logoutCurrentUser,
  updateProfile,
  getUserById,
  adminUpdateUser,
} from "../controllers/userControllers.js";
import {
  authenticate,
  authorizedAdmin,
} from "../middlewares/authMiddleware.js";

router
  .route("/")
  .post(createUser)
  .get(authenticate, authorizedAdmin, getAllUsers);
router.post("/auth", loginUser);
router.get("/logout", logoutCurrentUser);
router
  .route("/profile")
  .get(authenticate, getCurrentUser)
  .put(authenticate, updateProfile);
router
  .route("/:id")
  .delete(authenticate, authorizedAdmin, deleteUser)
  .get(authenticate, authorizedAdmin, getUserById)
  .put(authenticate, authorizedAdmin, adminUpdateUser);
export default router;
