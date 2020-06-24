import { EntityRepository, Repository } from "typeorm";
import { IceCream } from "../../models/v1/ice.cream.model";

@EntityRepository(IceCream)
export class IceCreamRepository extends Repository<IceCream> {}
