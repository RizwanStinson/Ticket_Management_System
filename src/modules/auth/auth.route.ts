import express from "express";
import {register, login, logout} from "./auth.controller";
import {
  authenticate
} from "../../shared/middlewares/auth.middleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authenticate, logout);

export default router;