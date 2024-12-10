import express from "express";
import {
  addTicket,
  updateTicket,
  getAvailableTickets,
  deleteTicket,
  purchaseTicket,
} from "./ticket.controller";
import {
  authenticate,
  authorizeAdmin,
} from "../../shared/middlewares/auth.middleware";

const router = express.Router();

router.get("/", authenticate, getAvailableTickets);
router.post("/", authenticate, authorizeAdmin, addTicket);
router.put("/:id", authenticate, authorizeAdmin, updateTicket);
router.delete(
  "/:id",
  authenticate,
  authorizeAdmin,
  deleteTicket
);
router.post("/purchase", authenticate, purchaseTicket);

export default router;
