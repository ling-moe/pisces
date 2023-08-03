import { RequestMethod } from "@nestjs/common";
import { RouteParamtypes } from "@nestjs/common/enums/route-paramtypes.enum";

interface RequestMappingConifg{
  method: RequestMethod;
  path: string;
  paramType: RouteParamtypes
}

export function methodToHttp(name: string): RequestMappingConifg{
  // ! TODO 完善名称转换逻辑
  return {
    method: RequestMethod.GET,
    path: name,
    paramType: RouteParamtypes.QUERY
  }
}
