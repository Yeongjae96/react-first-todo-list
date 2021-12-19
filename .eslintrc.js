module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    // import 관련 규칙 모음
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    // 기준은 root 입니다.
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "import/no-unresolved": "off",
    "react/jsx-wrap-multilines": "off",
  },
};
