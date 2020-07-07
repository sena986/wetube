module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "object-shorthand": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
