import { Request, Response } from "express";
import { createTokenService } from "../services/Login/createTokenService";

const createTokenController = async (req: Request, res: Response) => {
  const data = req.body;

  const token = await createTokenService(data);

  return res.json({ token });
};

export { createTokenController };
