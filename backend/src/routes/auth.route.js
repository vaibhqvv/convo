import express from "express";
import {login, logout, signup, updateProfile, checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js"

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);// protectRoute will check the user is authenticated (logged in) or not before letting them update profile

router.get("/check", protectRoute, checkAuth);
export default router;
