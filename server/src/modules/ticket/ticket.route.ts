import express from "express";
import {
  getAvailableTickets,
  purchaseTicket,
} from "./ticket.controller";
import {
  authenticate
} from "../../shared/middlewares/auth.middleware";

const router = express.Router();

router.get("/", authenticate, getAvailableTickets);
router.post("/purchase", authenticate, purchaseTicket);

export default router;
