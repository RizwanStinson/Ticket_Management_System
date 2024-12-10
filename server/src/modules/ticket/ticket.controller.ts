import { Request, Response } from "express";
import {
  addTicketService,
  updateTicketService,
  deleteTicketService,
  getAvailableTicketsService,
  purchaseTicketService,
} from "./ticket.service";



export const addTicket = async (req: Request, res: Response) => {
  try {
    const { busId, price, departureTime, availableSeats } = req.body;
    const ticket = await addTicketService(
      busId,
      price,
      new Date(departureTime),
      availableSeats
    );
    res.status(201).json({ message: "Ticket added successfully", ticket });
  } catch (error) {
    res
      .status(400)
      .json({
        message: "Failed to add ticket",
        error: (error as Error).message,
      });
  }
};

export const updateTicket = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { price, departureTime, availableSeats } = req.body;
    const ticket = await updateTicketService(
      id,
      price,
      new Date(departureTime),
      availableSeats
    );
    if (ticket) {
      res.json({ message: "Ticket updated successfully", ticket });
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        message: "Failed to update ticket",
        error: (error as Error).message,
      });
  }
};

export const deleteTicket = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const ticket = await deleteTicketService(id);
    if (ticket) {
      res.json({ message: "Ticket deleted successfully" });
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        message: "Failed to delete ticket",
        error: (error as Error).message,
      });
  }
};

export const getAvailableTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await getAvailableTicketsService();
    res.json(tickets);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to fetch tickets",
        error: (error as Error).message,
      });
  }
};

export const purchaseTicket = async (req: Request, res: Response) => {
  try {
    const { ticketId } = req.body;
    const ticket = await purchaseTicketService(ticketId);
    if (ticket) {
      res.json({ message: "Ticket purchased successfully", ticket });
    } else {
      res.status(404).json({ message: "Ticket not found or not available" });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        message: "Failed to purchase ticket",
        error: (error as Error).message,
      });
  }
};