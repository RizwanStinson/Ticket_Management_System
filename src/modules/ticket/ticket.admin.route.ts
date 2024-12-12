import express from "express";
import {
  addTicket,
  updateTicket,
  deleteTicket
} from "./ticket.controller";
import {
  authenticate,
  authorizeAdmin,
} from "../../shared/middlewares/auth.middleware";

const router = express.Router();


router.post("/", authenticate, authorizeAdmin, addTicket);
router.put("/:id", authenticate, authorizeAdmin, updateTicket);
router.delete("/:id", authenticate, authorizeAdmin, deleteTicket);


export default router;
