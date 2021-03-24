module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: "plugin:vue/essential",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {},
  globals: {
    AMap: true
  }
};
