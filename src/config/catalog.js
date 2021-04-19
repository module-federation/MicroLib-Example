/**
 * @type {import("../models").ModelSpecification}
 */
export const Catalog = {
  endpoint: "catalogs",
  factory: () => ({ a, b }) =>
    Object.freeze({ a, b, hi: () => console.log("hi") }),
  modelName: "catalog",
  commands: {
    hi: {
      command: "hi",
      acl: ["write"],
    },
  },
};
