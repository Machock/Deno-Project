import { Client } from "https://deno.land/x/mysql/mod.ts";

export default function connect() {
  return new Client().connect({
    hostname: "127.0.0.1",
    username: "root",
    db: "deno_db",
    poolSize: 3, // connection limit
    password: "12345",
  });
}
