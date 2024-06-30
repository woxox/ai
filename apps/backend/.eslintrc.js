module.exports = {
  root: true,
  extends: ["@ai/eslint-config"],
  rules: {
    "no-useless-constructor": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "n/no-path-concat": "off",
    "@typescript-eslint/ban-ts-comment": "warn"
  }
};
