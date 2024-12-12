import bcrypt from "bcrypt";
import User, { IUser } from "./user.model";
import { generateToken } from "../../shared/utils/jwt.util";

export const registerUser = async (
  username: string,
  email: string,
  password: string,
  role: "admin" | "user"
): Promise<IUser> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword, role });
  await user.save();
  return user;
};


export const loginUser = async (
  email: string,
  password: string
): Promise<{ user: IUser; token: string }> => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  const token = generateToken(user.id, user.role);
  return { user, token };
};