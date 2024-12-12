import mongoose, { Schema, Document } from "mongoose";

export interface IBus extends Document {
  name: string;
  capacity: number;
}

const BusSchema: Schema = new Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
});

export default mongoose.model<IBus>("Bus", BusSchema);