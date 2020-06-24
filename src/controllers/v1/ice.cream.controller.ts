import {
  Controller,
  Get,
  Req,
  Res,
  Param,
  Body,
  JsonController,
  Post
  UploadedFile,
  Delete,
} from "routing-controllers";
import { IceCreamService } from "../../services/v1/ice.cream.service";
import { Response } from "express";

@JsonController("/v1/ice_creams")
class IceCreamController {
  constructor(private readonly iceCreamService: IceCreamService) {}

  @Get("/")
  iceCreamList(@Res() response: any) {
    const iceCreams = this.iceCreamService.getIceCream();
    return iceCreams;
  }

  @Post("/")
  iceCreamCreate(@Body() iceCreamInput: any) {
    const iceCream = this.iceCreamService.createIceCream(iceCreamInput);
    return iceCream;
  }
}
export default iceCreamController;
