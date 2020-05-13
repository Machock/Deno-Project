import { RouterContext } from "https://deno.land/x/oak/mod.ts";

const books = new Map<string, any>();
books.set("4", {
  id: "4",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Author",
});

const list = [
  {
    id: "4",
    title: "The Hound of the Baskervilles",
    author: "Conan Doyle, Author",
  },
  {
    id: "3",
    title: "基督山伯爵",
    author: "大仲马",
  },
];

books.set("3", {
  id: "3",
  title: "基督山伯爵",
  author: "大仲马",
});

export const createUser = (context: RouterContext) => {
  context.response.body = "Hello world!";
};

export const getUser = (context: RouterContext) => {
  if (context.params && context.params.id && books.has(context.params.id)) {
    context.response.body = books.get(context.params.id);
  }
};

export const getUserList = (context: RouterContext) => {
  context.response.body = list;
};
