import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: { ...globals.node, ...globals.mocha }, // Agregar Node y Mocha
    },
    plugins: {
      js: pluginJs,
      typescript: tsEslint,
      react: pluginReact,
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off", // Desactiva si prefieres seguir usando `require()`
      "no-unused-vars": "warn", // Opcionalmente cambia a advertencia en lugar de error
      "no-undef": "off", // Asegúrate de que tus entornos estén bien definidos
    },
    settings: {
      react: {
        version: "detect", // Detecta automáticamente la versión de React
      },
    },
  },
];
