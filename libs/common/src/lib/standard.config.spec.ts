import { initStandard } from "./standard.config";

describe('BaseUrlInterceptor', () => {

  it('should prepend base url when request url does not has http scheme', () => {
    initStandard()
  });
});
