import {Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn} from "typeorm";

@Entity("IceCream")
export class IceCream {
  @ObjectIdColumn({ name: "_id" })
  id: number;

  @Column()
  name: string;

  @Column()
  imageUrl: string;
}