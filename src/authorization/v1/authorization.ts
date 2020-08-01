import { Action, Authorized } from "routing-controllers";
import jwt from "jsonwebtoken";
import { UserRepository } from "../../repositories/v1/user.repository";
import { getCustomRepository } from "typeorm";

const authorizationChecker = async (action: Action) => {
  try {
    const userRepository = getCustomRepository(UserRepository);
    const PRIVATE_KEY: string = "ñhpf98q34yp9rqoiar";
    /* tslint:disable:no-string-literal */
    const token = action.request.headers["authorization"];

    if (token) {
      const tokenUser: any = await jwt.verify(token, PRIVATE_KEY);
      if (tokenUser) {
        const user = await userRepository.findOne(tokenUser.id);
        if (user) return true;
      }
    }
    return false;
  } catch (error) {
    return false;
  }
};

export default authorizationChecker;
