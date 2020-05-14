import { Client } from "https://deno.land/x/mysql/mod.ts";
import config from "../config/main.ts";

export default function connect() {
  return new Client().connect({
    ...config.db,
  });
}
