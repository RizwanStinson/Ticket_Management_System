import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database'
import authRoutes from "./modules/auth/auth.route";
import busRoutes from "./modules/bus/bus.route";
import adminBusRoutes from "./modules/bus/bus.admin.route";
import ticketRoutes from "./modules/ticket/ticket.route";
import adminTicketRoutes from "./modules/ticket/ticket.admin.route";


dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/admin/bus", adminBusRoutes);
app.use("/admin/ticket", adminTicketRoutes);
app.use("/buses", busRoutes);
app.use("/tickets", ticketRoutes);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});