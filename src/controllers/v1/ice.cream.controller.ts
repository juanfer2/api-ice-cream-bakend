import {
  Controller,
  Get,
  Req,
  Res,
  Param,
  JsonController,
  Post,
  UploadedFile,
  Delete,
} from "routing-controllers";
import { Response } from "express";
@JsonController("/v1/ice_creams")
class SegementersController {
  @Get("/")
  async segmenterList(@Res() response: any) {
    return 'Hi'
  }
}
export default SegementersController;