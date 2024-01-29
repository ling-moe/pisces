import { appInit } from "./src/main.app-init";

const app = appInit();

module.exports = async function(req, res, next) {
  if (/^\/api/.test(req.url)) {
    const mid = (await app).getHttpAdapter().getInstance();
    return mid(req, res);
  }
  next();
}
