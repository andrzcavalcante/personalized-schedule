import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const ensureAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Invalid Token"
    })
  }

  const splitToken = token.split(" ")[1];

  jwt.verify(
    splitToken,
    process.env.SECRET_KEY!,
    (error: any, decoded: any) => {
      if (error){
        return res.status(401).json({
          message: "Invalid Token"
        })
      }

      res.locals.userId = decoded.sub;

      return next()
    }
  );
};

export { ensureAuthMiddleware }
