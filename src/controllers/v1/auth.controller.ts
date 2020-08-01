import {
  Get,
  Res,
  Param,
  Body,
  JsonController,
  Post,
  Delete,
  Put,
} from "routing-controllers";
import { AuthService } from "../../services/v1/auth.service";
import { UserValidator } from "../../validators/v1/user.validator";

@JsonController("/v1/auth")
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/register")
  register(@Body() userInput: UserValidator) {
    const user = this.authService.Register(userInput);
    return user;
  }

  @Post("/login")
  login(@Body() userInput: any) {
    const user = this.authService.login(userInput);
    return user;
  }
}
export default AuthController;
