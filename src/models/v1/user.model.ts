import {
  ObjectID,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Transform } from "class-transformer";

@Entity("User")
export class User {
  @Transform((id: ObjectID) => id.toHexString(), { toPlainOnly: true })
  @ObjectIdColumn({ name: "_id" })
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @Column()
  cellPhone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // El signo de interrogación indica que el campo puede estar o no
  @Column()
  passwordConfirmation?: string;

  @Column()
  rol: string;

  // @Column()
  token?: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
