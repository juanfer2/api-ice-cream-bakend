import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { UserRepository } from "../../repositories/v1/user.repository";

@Service()
export class UserService {
  constructor(@InjectRepository() private userRepository: UserRepository) {}

  async createUser(inputData: any): Promise<any> {
    try {
      const user = await this.userRepository.save(inputData);
      return user;
    } catch (error) {
      return error;
    }
  }

  async getUsers(): Promise<any> {
    try {
      const users = await this.userRepository.find({});
      return users;
    } catch (error) {
      return error;
    }
  }

  async getUserById(id: string): Promise<any> {
    try {
      const user = await this.userRepository.findOne(id);
      return user;
    } catch (error) {
      return error;
    }
  }

  async updateUser(id: string, userInput: any): Promise<any> {
    try {
      const user = await this.userRepository.update(id, userInput);
      return user;
    } catch (error) {
      return error;
    }
  }

  async deleteUser(id: string): Promise<any> {
    try {
      const deletedUser = await this.userRepository.delete(id);
      return deletedUser;
    } catch (error) {
      return error;
    }
  }
}
