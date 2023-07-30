import { Router } from "express";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contact.schema";
import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import { ensureOwnerMiddleware } from "../middlewares/ensureOwner.middleware";

const contactRoutes = Router();

contactRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValid(contactSchemaRequest),
  createContactController
);
contactRoutes.get("", ensureAuthMiddleware, listContactController);
contactRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureOwnerMiddleware,
  ensureDataIsValid(contactSchemaUpdate),
  updateContactController
);
contactRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureOwnerMiddleware,
  deleteContactController
);

export { contactRoutes };
