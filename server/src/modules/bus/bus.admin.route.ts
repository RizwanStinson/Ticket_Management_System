import express from "express";
import { addBus, updateBus, deleteBus } from "./bus.controller";
import {
  authenticate,
  authorizeAdmin,
} from "../../shared/middlewares/auth.middleware";

const router = express.Router();


router.post("/", authenticate, authorizeAdmin, addBus);
router.put("/:id", authenticate, authorizeAdmin, updateBus);
router.delete("/:id", authenticate, authorizeAdmin, deleteBus);

export default router;
