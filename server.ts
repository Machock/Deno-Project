import { Application, send, Context } from "https://deno.land/x/oak/mod.ts";
import config from "./config/main.ts";
import connect from "./utils/db.ts";

// import api router
import userRouter from "./resources/user/user.router.ts";
import itemRouter from "./resources/item/item.router.ts";

const app = new Application();

// use api
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.use(itemRouter.routes());
app.use(itemRouter.allowedMethods());

// start app
export default async function start() {
  try {
    // connect db
    const client = await connect();
    // const username = "manyuanrong";
    // const users = await client.query(`select * from users`);
    // const queryWithParams = await client.query(
    //   "select ??,name from ?? where id = ?",
    //   ["id", "users", 1]
    // );

    // use static folder
    app.use(async (context: Context) => {
      await send(context, context.request.url, {
        root: `${Deno.cwd()}/webapp`,
        index: "index.html",
      });
    });

    // listen application
    await app.listen({ port: config.port });
    console.log("listen port ", config.port);
  } catch (e) {
    console.error(e);
  }
}
