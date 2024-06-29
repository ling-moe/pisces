import appInit from "./src/app/main.backend";

const app = appInit();

module.exports = async function(req: { url: string; }, res: unknown, next: () => void) {
  if (/^\/api/.test(req.url)) {
    const mid = (await app).getHttpAdapter().getInstance();
    return mid(req, res);
  }
  next();
}
