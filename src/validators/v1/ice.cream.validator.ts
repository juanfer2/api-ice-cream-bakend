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

export class IceCreamValidator {
  @IsNotEmpty({
    message: "EL nombre no puede estar vacío",
  })
  name: string;

  @IsNotEmpty()
  imageUrl: string;
}
