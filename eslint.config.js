import prettier from "eslint-config-prettier";
import js from "@eslint/js";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import ts from "typescript-eslint";

export default ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    ...svelte.configs["flat/recommended"],
    prettier,
    ...svelte.configs["flat/prettier"],
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/array-type": ["warn", { default: "array-simple" }]
        }
    },
    {
        files: ["**/*.svelte"],

        languageOptions: {
            parserOptions: {
                parser: ts.parser
            }
        }
    },
    {
        ignores: ["build/", ".svelte-kit/", "dist/"]
    }
);
