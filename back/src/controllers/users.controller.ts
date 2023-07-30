import { Request, Response } from "express";
import { TUserRequest, TUserResponse } from "../interfaces/users.interface";
import { createUserService } from "../services/Users/createUser.service";
import {listUserService} from "../services/Users/listUser.service";
import {updateUserService} from "../services/Users/updateUser.service";
import {deleteUserService} from "../services/Users/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  const data: TUserRequest = req.body;

  const newUser: TUserResponse = await createUserService(data);

  return res.status(201).json(newUser);
};

const listUserController = async (req: Request, res: Response) => {
  const userId = req.params.id
  const user = await listUserService(Number(userId))

  return res.json(user)
};

const updateUserController = async (req: Request, res: Response) => {
  const userId = req.params.id
  const updateUser = await updateUserService(req.body,Number(userId))

  return res.json(updateUser)
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.params.id
  await deleteUserService(Number(userId))

  return res.status(204).send()
};

export { createUserController, listUserController, updateUserController, deleteUserController };
