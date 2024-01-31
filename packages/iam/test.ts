import { appInit } from "./src/app/infra/config/app.module.backend";

const app = appInit();

module.exports = async function(req, res, next) {
  if (/^\/api/.test(req.url)) {
    const mid = (await app).getHttpAdapter().getInstance();
    return mid(req, res);
  }
  next();
}
