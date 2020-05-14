export default {
  port: 8000,
  api: {
    user: "/api/user",
    item: "/api/item",
  },
  db: {
    hostname: "127.0.0.1",
    username: "root",
    db: "deno_db",
    poolSize: 3, // connection limit
    password: "12345",
  },
};
