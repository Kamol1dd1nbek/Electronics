const Router = require("@koa/router");
const router = new Router();

const clientRoutes = require("../routes/client.routes");
router.use(clientRoutes());

module.exports = () => router.routes();