import { Request, Response, NextFunction } from "express";

const ensurePermissionMidlleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const idUser = Number(req.params.id);
  const idToken = Number(res.locals.userId);

  if (idUser !== idToken) {
    return res.status(403).json({
      message: "Insufficient permission",
    });
  }

  return next();
};

export default ensurePermissionMidlleware;
