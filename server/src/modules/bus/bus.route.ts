import express from "express";
import {addBus, updateBus, deleteBus, getAllBuses} from "./bus.controller";
import { authenticate, authorizeAdmin } from "../../shared/middlewares/auth.middleware";

const router = express.Router();

router.get("/", authenticate, getAllBuses);
router.post("/", authenticate, authorizeAdmin, addBus);
router.put("/:id", authenticate, authorizeAdmin, updateBus);
router.delete("/:id", authenticate, authorizeAdmin, deleteBus);

export default router;

