import mongoose, { Schema, Document } from "mongoose";

export interface ITicket extends Document {
  bus: mongoose.Types.ObjectId;
  price: number;
  departureTime: Date;
  availableSeats: number;
}

const TicketSchema: Schema = new Schema({
  bus: { type: Schema.Types.ObjectId, ref: "Bus", required: true },
  price: { type: Number, required: true },
  departureTime: { type: Date, required: true },
  availableSeats: { type: Number, required: true },
});

export default mongoose.model<ITicket>("Ticket", TicketSchema);