import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { IceCreamRepository } from "../../repositories/v1/ice.cream.repository";

@Service()
export class IceCreamService {
  constructor(
    @InjectRepository() private iceCreamRepository: IceCreamRepository
  ) {}

  async createIceCream(inputData: any): Promise<any> {
    try {
      const iceCream = await this.iceCreamRepository.save(inputData);
      return iceCream;
    } catch (error) {
      return error;
    }
  }

  async getIceCream(): Promise<any> {
    try {
      const iceCreams = await this.iceCreamRepository.find({});
      return iceCreams;
    } catch (error) {
      return error;
    }
  }

  async getIceCreamById(id: string): Promise<any> {
    try {
      const iceCream = await this.iceCreamRepository.findOne(id);
      return iceCream;
    } catch (error) {
      return error;
    }
  }
}
