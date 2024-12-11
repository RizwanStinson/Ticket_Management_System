import { Request, Response } from "express";
import {registerUser, loginUser} from "./auth.service";


export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password, role } = req.body;
    const user = await registerUser(
      username,
      email,
      password,
      role
    );
    res
      .status(201)
      .json({ message: "User registered successfully", userId: user._id });
  } catch (error) {
    res
      .status(400)
      .json({
        message: "Registration failed",
        error: (error as Error).message,
      });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser(email, password);
    res.json({
      message: "Login successful",
      token,
      userId: user._id,
      role: user.role,
    });
  } catch (error) {
    res
      .status(401)
      .json({ message: "Login failed", error: (error as Error).message });
  }
};

export const logout = (req: Request, res: Response) => {
  // For logout, In Frontend, token will be cleared from local storage
  res.json({ message: "Logout successful" });
};