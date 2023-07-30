import { Request, Response } from "express";
import { createContactService } from "../services/Contacts/createContact.service";
import { listContactService } from "../services/Contacts/listContact.service";
import { updateContactService } from "../services/Contacts/updateContact.service";
import { deleteContactService } from "../services/Contacts/deleteContact.service";

const createContactController = async (req: Request, res: Response) => {

    const userId = res.locals.userId
    const newContact = await createContactService(req.body, Number(userId))

    return res.status(201).json(newContact)
}

const listContactController = async (req: Request, res: Response) => {

    const userId = res.locals.userId
    const contacts = await listContactService(Number(userId))

    return res.json(contacts)
}

const updateContactController = async (req: Request, res: Response) => {
    const updateContact = await updateContactService(req.body, Number(req.params.id))
    
    return res.json(updateContact)
}

const deleteContactController = async (req: Request, res: Response) => {
    await deleteContactService(Number(req.params.id))

    return res.status(204).send()
}

export { createContactController, listContactController, updateContactController, deleteContactController}