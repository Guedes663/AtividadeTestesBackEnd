import { Request, Response } from 'express';
import { UserBusiness } from '../Business/UserBusiness';

export class UserController {

    constructor(private userBusiness: UserBusiness) { }

    getUserById = async (req: Request, res: Response) => {
        try {
            const idUser = req.params.id;
            const infoUser = await this.userBusiness.getUserById(idUser);

            res.status(200).send(infoUser);
        } catch (err: any) {
            res.status(err.statusCode || 500).send(err.message);
        }
    }

    getAllUsers = async (req: Request, res: Response) => {
        try {
            const roleUser = req.params.role;
            const allUsers = await this.userBusiness.getAllUsers(roleUser);

            res.status(200).send(allUsers);
        } catch (err: any) {
            res.status(err.statusCode || 500).send(err.message);
        }
    }

    getMyUser = async (req: Request, res: Response) => {
        try {
            const myUser = "35b62ff4-64af-4721-a4c5-d038c6f730cf";
            const myInfo = await this.userBusiness.getMyUser(myUser);

            res.status(200).send(myInfo);
        } catch (err: any) {
            res.status(err.statusCode || 500).send(err.message);
        }

    }

    getUserBusiness = () => {
        return this.userBusiness;
    }
}