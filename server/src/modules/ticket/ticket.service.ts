import Ticket, { ITicket } from "./ticket.model";

export const addTicketService = async (
  busId: string,
  price: number,
  departureTime: Date,
  availableSeats: number
): Promise<ITicket> => {
  const ticket = new Ticket({
    bus: busId,
    price,
    departureTime,
    availableSeats,
  });
  await ticket.save();
  return ticket;
};

export const updateTicketService = async (
  id: string,
  price: number,
  departureTime: Date,
  availableSeats: number
): Promise<ITicket | null> => {
  return Ticket.findByIdAndUpdate(
    id,
    { price, departureTime, availableSeats },
    { new: true }
  );
};

export const deleteTicketService = async (id: string): Promise<ITicket | null> => {
  return Ticket.findByIdAndDelete(id);
};

export const getAvailableTicketsService = async (): Promise<ITicket[]> => {
  return Ticket.find({ availableSeats: { $gt: 0 } }).populate("bus");
};

export const purchaseTicketService = async (
  ticketId: string,
  quantity: number
): Promise<ITicket | null> => {
  const ticket = await Ticket.findById(ticketId);

  if (!ticket) {
    throw new Error("Ticket not found");
  }

  if (ticket.availableSeats < quantity) {
    throw new Error(`Only ${ticket.availableSeats} ticket(s) are available`);
  }

  ticket.availableSeats -= quantity; // Reduce seats by the requested quantity
  await ticket.save(); // Save changes to the database

  return ticket; // Return the updated ticket

  // if (!ticket || ticket.availableSeats === 0) {
  //   throw new Error("Ticket not available");
  // }

  // ticket.availableSeats -= 1;
  // await ticket.save();
  // return ticket;
};