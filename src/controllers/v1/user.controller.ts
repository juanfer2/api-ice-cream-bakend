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
import { UserService } from "../../services/v1/user.service";
import { UserValidator } from "../../validators/v1/user.validator";

@JsonController("/v1/users")
class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/")
  userList(@Res() response: any) {
    const users = this.userService.getUsers();
    return users;
  }

  @Post("/")
  userCreate(@Body() userInput: UserValidator) {
    const user = this.userService.createUser(userInput);
    return user;
  }

  @Put("/:id")
  userUpdate(@Param("id") id: string, @Body() user: any) {
    const updatedUser = this.userService.updateUser(id, user);
    return user;
  }

  @Delete("/:id")
  userDelete(@Param("id") id: string) {
    const deletedUser = this.userService.deleteUser(id);
    return this.userList;
  }
}
export default UserController;
