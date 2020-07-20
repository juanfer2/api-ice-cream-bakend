import { EntityRepository, Repository } from "typeorm";
import { User } from "../../models/v1/user.model";
import bcrypt from "bcrypt";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async encryptPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async comparedPassword(sentPassword: string, currentPassword: string) {
    const isSame = await bcrypt.compare(sentPassword, currentPassword);
    return isSame;
  }
}
