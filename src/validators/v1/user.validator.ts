import {
  validate,
  validateOrReject,
  Contains,
  IsNotEmpty,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from "class-validator";

export class UserValidator {
  @IsNotEmpty({
    message: "EL nombre no puede estar vacío",
  })
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}
