export class UserRepository {

    private dataUser: any[];

    constructor() {
        this.dataUser = [{
            id: "35b62ff4-64af-4721-a4c5-d038c6f730cf",
            name: "Rubens",
            email: "rubens@gmail.com",
            role: "ADMIN"
        }];
    }

    getUserById = async (idUser: any) => {
        for (let i = 0; i < this.dataUser.length; i++) {
            if (idUser === this.dataUser[i].id) {
                return this.dataUser[i];
            }
        }

        return null;
    }

    getAllUsers = async () => {
        return this.dataUser;
    }
}