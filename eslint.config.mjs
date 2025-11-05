// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // ✅ Load Next.js and TypeScript recommended configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Your project overrides
  {
    rules: {
      // --- TypeScript rules ---
      "@typescript-eslint/no-explicit-any": "off", // or "warn" instead of "error"
      "@typescript-eslint/no-unused-vars": "off",
      // --- React Hooks rules ---
      "react-hooks/exhaustive-deps": "warn",

      // --- Accessibility (optional relaxed) ---
      "jsx-a11y/role-supports-aria-props": "off",
    },
  },
];
