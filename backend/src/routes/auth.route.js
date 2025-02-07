import express from "express";
import {login, logout, signup} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile",protectRoute, updateProfile);// protectRoute will check the user is authenticated (logged in) or not before letting them update profile

export default router;
