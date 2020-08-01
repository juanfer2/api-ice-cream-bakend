import {
  Get,
  Res,
  Param,
  Body,
  JsonController,
  Post,
  Delete,
  Put,
  Authorized,
} from "routing-controllers";
import { IceCreamService } from "../../services/v1/ice.cream.service";
import { IceCreamValidator } from "../../validators/v1/ice.cream.validator";

@JsonController("/v1/ice_creams")
class IceCreamController {
  constructor(private readonly iceCreamService: IceCreamService) {}

  @Authorized()
  @Get("/")
  iceCreamList(@Res() response: any) {
    const iceCreams = this.iceCreamService.getIceCream();
    return iceCreams;
  }

  @Post("/")
  iceCreamCreate(@Body() iceCreamInput: IceCreamValidator) {
    const iceCream = this.iceCreamService.createIceCream(iceCreamInput);
    return iceCream;
  }

  @Put("/:id")
  iceCreamUpdate(@Param("id") id: string, @Body() iceCream: any) {
    const updatedIceCream = this.iceCreamService.updateIceCream(id, iceCream);
    return iceCream;
  }

  @Delete("/:id")
  iceCreamDelete(@Param("id") id: string) {
    const deletedIceCream = this.iceCreamService.deleteIceCream(id);
    return this.iceCreamList;
  }
}
export default IceCreamController;
