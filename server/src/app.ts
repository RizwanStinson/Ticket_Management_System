import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database'
import authRoutes from "./modules/auth/auth.route";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/auth", authRoutes);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});