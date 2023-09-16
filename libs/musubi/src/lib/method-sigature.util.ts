type Method = 'DELETE' | 'GET' | 'POST' | 'PUT';
type ParamType = 'QUERY' | 'BODY';

interface RequestMappingConifg {
  method: Method;
  path: string;
  paramType: ParamType;
}

const GET_MAPPING = ['find', 'query', 'select', 'list', 'get', 'page'];
const POST_MAPPING = ['create'];
const PUT_MAPPING = ['modify', 'update'];
const DELETE_MAPPING = ['delete', 'remove', 'del'];

export function methodToHttp(name: string): RequestMappingConifg {
  const lowerName = name.toLowerCase();
  let method: Method = 'POST';
  let paramType: ParamType = 'BODY';
  if (GET_MAPPING.find(i => lowerName.startsWith(i))) {
    method = 'GET';
    paramType = 'QUERY';
  } else if (POST_MAPPING.find(i => lowerName.startsWith(i))) {
    method = 'POST';
    paramType = 'BODY';
  } else if (PUT_MAPPING.find(i => lowerName.startsWith(i))) {
    method = 'PUT';
    paramType = 'BODY';
  } else if (DELETE_MAPPING.find(i => lowerName.startsWith(i))) {
    method = 'DELETE';
    paramType = 'BODY';
  }
  return {
    method,
    path: name.endsWith('Rpc') ? name.slice(0,-3) : name,
    paramType,
  };
}

export function extractMethodParams(method: Function): string[] {
  const methodStr = method.toString();
  const args = methodStr.slice(methodStr.indexOf('(') + 1, methodStr.indexOf(')')).match(/([^,]+)/g) ?? [];
  return args.map(arg => {
    if(arg.includes('=')){
      return (arg.match(/([^=]+)/g)?? [])[0]!.trim()
    }
    return arg.trim();
  });
}
