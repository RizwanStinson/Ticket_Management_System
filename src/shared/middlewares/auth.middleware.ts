import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.util";

 export interface DecodedToken {
  userId: string;
  role: 'admin' | 'user';
  iat: number;
  exp: number;
}


export const authenticate = (
  req: Request & { user?: DecodedToken },
  res: Response,
  next: NextFunction
): void => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    res.status(401).json({ message: "Authentication required" });
    return; 
  }

  try {
    const decoded = verifyToken(token) as DecodedToken;
    req.user = decoded;
    next(); 
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
    return; 
  }
};

export const authorizeAdmin = (
  req: Request & { user?: DecodedToken },
  res: Response,
  next: NextFunction
): void => {
  if (req.user?.role !== "admin") {
    res.status(403).json({ message: "Admin access required" });
    return;
  }
  next();
};
