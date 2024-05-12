import { UserRepository } from "../Data/UserRepository";
import { CustomError } from "../utils/CustomError";

export class UserBusiness {

    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository;
    }

    getUserById = async (idUser: any) => {
        try {
            const user = await this.userRepository.getUserById(idUser);

            if (!user) {
                throw new CustomError("User not found", 404);
            }
            else{
                return user;
            }
        } catch (err: any) {
            throw new CustomError(err.message, err.statusCode);
        }
    }


    getAllUsers = async (role: any) => {
        try {
            if (role !== "ADMIN") {
                throw new CustomError("unauthorized user", 404);
            }
            else {
                const users = await this.userRepository.getAllUsers();

                return users;
            }
        } catch (err: any) {
            throw new CustomError(err.message, err.statusCode);
        }
    }

    getMyUser = async (myUser: any) => {
        try {
            const myInfo = await this.userRepository.getUserById(myUser);

            if (!myInfo) {
                throw new CustomError("User not found", 404);
            }
            else {
                return myInfo;
            }
        } catch (err: any) {
            throw new CustomError(err.message, err.statusCode);
        }
    }
}