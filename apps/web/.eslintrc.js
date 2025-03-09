/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@thaitype-com/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
