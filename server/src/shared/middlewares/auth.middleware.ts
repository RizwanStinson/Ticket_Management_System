import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.util";


export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    res.status(401).json({ message: "Authentication required" });
    return; 
  }

  try {
    const decoded = verifyToken(token);
    (req as any).user = decoded;
    next(); 
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
    return; 
  }
};

export const authorizeAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if ((req as any).user?.role !== "admin") {
    res.status(403).json({ message: "Admin access required" });
    return; 
  }
  next();
};
