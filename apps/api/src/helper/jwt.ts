import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY!;


export const createToken = (data: any) => {
  const expiresIn = "1h";
  return jwt.sign({data}, secretKey, { expiresIn });
};
