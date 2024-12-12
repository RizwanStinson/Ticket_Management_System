import express from "express";
import {addBus, updateBus, deleteBus, getAllBuses} from "./bus.controller";
import { authenticate, authorizeAdmin } from "../../shared/middlewares/auth.middleware";

const router = express.Router();

router.get("/", authenticate, getAllBuses);


export default router;

