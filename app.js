const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const serve = require('koa-static');
const config = require('config');
const sequelize = require("./config/db");

const mainRouter = require("./routes/index.routes");

const app = new Koa();
app.use(bodyParser());
app.use(cors());
app.use(serve(__dirname + "/public"));
app.use(mainRouter());

async function start() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter : true, force: true}); // not Client.sync({alter : true, force: true});
        console.log('Connection has been established successfully.');
        const PORT = config.get("port") || 3030;
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();