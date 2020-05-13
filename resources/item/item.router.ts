import { Router } from "https://deno.land/x/oak/mod.ts";
import * as controllers from "./item.controllers.ts";
import config from "../../config/main.ts";

const url = config.api.item;

const router = new Router({
  prefix: url,
});

// /api/user
router.get("/", controllers.getUserList).get("/:id", controllers.getUser);

export default router;
