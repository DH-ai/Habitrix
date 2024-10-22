import pluginJs from "@eslint/js";
import { rules } from "@eslint/js/src/configs/eslint-all";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    extends: [
      "eslint:recommended",
      "plugins:import/errors",
      "plugins:import/warnings",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",

      "prettier",
    ],
    rules: {
      "react/prop-types": 0,
      "react/react-in-jsx-scope": 0,
    },
    plugins: ["react", "import", "jsx-a11y"],
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
    "env": {
      "es6": true,
      "browser": true,
      "node": true
    }
    
  },
];
