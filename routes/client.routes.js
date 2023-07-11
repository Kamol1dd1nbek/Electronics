const Router = require("@koa/router");
const { addClient } = require("../controllers/client.controller");
const router = new Router();

router.post("/add", addClient);

module.exports = () => router.routes();