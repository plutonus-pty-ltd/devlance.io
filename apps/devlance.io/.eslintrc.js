const path = require("path");

module.exports = {
  ...require("config/eslint-next"),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"]
  },
  rules: {
    "@next/next/no-html-link-for-pages": [2, path.join(__dirname, "src")],
    "import/no-extraneous-dependencies": [2]
  }
}
