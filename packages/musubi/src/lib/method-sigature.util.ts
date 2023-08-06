type Method = 'DELETE' | 'GET' | 'POST' | 'PUT';
type ParamType = 'QUERY' | 'BODY';

interface RequestMappingConifg {
  method: Method;
  path: string;
  paramType: ParamType;
}

const GET_MAPPING = ['find', 'query', 'select', 'list', 'get'];
const POST_MAPPING = ['create'];
const PUT_MAPPING = ['modify', 'update'];
const DELETE_MAPPING = ['delete', 'remove', 'del'];

export function methodToHttp(name: string): RequestMappingConifg {
  const lowerName = name.toLowerCase();
  let method: Method = 'POST';
  let paramType: ParamType = 'BODY';
  if (GET_MAPPING.includes(lowerName)) {
    method = 'GET';
    paramType = 'QUERY';
  } else if (POST_MAPPING.includes(lowerName)) {
    method = 'POST';
    paramType = 'BODY';
  } else if (PUT_MAPPING.includes(lowerName)) {
    method = 'PUT';
    paramType = 'BODY';
  } else if (DELETE_MAPPING.includes(lowerName)) {
    method = 'DELETE';
    paramType = 'BODY';
  }
  return {
    method,
    path: name,
    paramType,
  };
}

export function extractMethodParams(method: Function): string[] {
  const methodStr = method.toString();
  return methodStr.slice(methodStr.indexOf('(') + 1, methodStr.indexOf(')')).match(/([^\s,]+)/g) ?? [];
}
