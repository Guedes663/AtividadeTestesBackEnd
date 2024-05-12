import { CustomError } from '../../utils/CustomError';
import { UserBusiness } from '../../Business/UserBusiness';

describe('UserBusiness', () => {
    let userBusiness: UserBusiness;

    beforeEach(() => {
        userBusiness = new UserBusiness();
    });

    describe('getUserById', () => {
        it('should return error when user is not found', async () => {
            const idUser = 'nonexistentId';

            try {
                await userBusiness.getUserById(idUser);
            } catch (error: any) {
                expect(error).toBeInstanceOf(CustomError);
                expect(error.statusCode).toBe(404);
                expect(error.message).toBe('User not found');
            }
        });

        it('should return success response when user is found', async () => {
            const idUser = '35b62ff4-64af-4721-a4c5-d038c6f730cf';

            jest.spyOn(userBusiness['userRepository'], 'getUserById').mockResolvedValueOnce({
                id: '35b62ff4-64af-4721-a4c5-d038c6f730cf',
                name: 'Rubens',
                email: 'rubens@gmail.com',
                role: 'ADMIN'
            });

            const result = await userBusiness.getUserById(idUser);

            expect(userBusiness['userRepository'].getUserById).toHaveBeenCalledWith(idUser);
            expect(result).toEqual({
                id: '35b62ff4-64af-4721-a4c5-d038c6f730cf',
                name: 'Rubens',
                email: 'rubens@gmail.com',
                role: 'ADMIN'
            });
        });
    });

    describe('getAllUsers', () => {
        it('should return error when user is not authorized', async () => {
            const role = 'USER';

            try {
                await userBusiness.getAllUsers(role);
            } catch (error: any) {
                expect(error).toBeInstanceOf(CustomError);
                expect(error.statusCode).toBe(404);
                expect(error.message).toBe('unauthorized user');
            }
        });

        it('should return success response when user is authorized', async () => {
            const role = 'ADMIN';

            jest.spyOn(userBusiness['userRepository'], 'getAllUsers').mockResolvedValueOnce([
                {
                    id: '35b62ff4-64af-4721-a4c5-d038c6f730cf',
                    name: 'Rubens',
                    email: 'rubens@gmail.com',
                    role: 'ADMIN'
                }
            ]);

            const result = await userBusiness.getAllUsers(role);

            expect(userBusiness['userRepository'].getAllUsers).toHaveBeenCalled();
            expect(result).toEqual([
                {
                    id: '35b62ff4-64af-4721-a4c5-d038c6f730cf',
                    name: 'Rubens',
                    email: 'rubens@gmail.com',
                    role: 'ADMIN'
                }
            ]);
        });
    });

    describe('getMyUser', () => {
        it('should return error when user is not found', async () => {
            const myUser = 'invalidUserId';

            try {
                await userBusiness.getMyUser(myUser);
            } catch (error: any) {
                expect(error).toBeInstanceOf(CustomError);
                expect(error.statusCode).toBe(404);
                expect(error.message).toBe('User not found');
            }
        });

        it('should return success response when user is found', async () => {
            const myUser = '35b62ff4-64af-4721-a4c5-d038c6f730cf';

            jest.spyOn(userBusiness['userRepository'], 'getUserById').mockResolvedValueOnce({
                id: '35b62ff4-64af-4721-a4c5-d038c6f730cf',
                name: 'Rubens',
                email: 'rubens@gmail.com',
                role: 'ADMIN'
            });

            const result = await userBusiness.getMyUser(myUser);

            expect(userBusiness['userRepository'].getUserById).toHaveBeenCalledWith(myUser);
            expect(result).toEqual({
                id: '35b62ff4-64af-4721-a4c5-d038c6f730cf',
                name: 'Rubens',
                email: 'rubens@gmail.com',
                role: 'ADMIN'
            });
        });
    });
});
