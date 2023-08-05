interface RequestMappingConifg{
  method: 'DELETE' | 'GET' | 'POST' | 'PUT';
  path: string;
  paramType: 'QUERY' | 'BODY'
}

export function methodToHttp(name: string): RequestMappingConifg{
  // ! TODO 完善名称转换逻辑
  return {
    method: 'GET',
    path: name,
    paramType: 'QUERY'
  }
}

export function extractMethodParams(method: Function): string[] {
  const methodStr = method.toString();
  return methodStr.slice(methodStr.indexOf('(') + 1, methodStr.indexOf(')')).match(/([^\s,]+)/g)??[];
}
