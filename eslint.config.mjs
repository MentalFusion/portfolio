// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
    {
        rules: {
            "semi": ["error", "always"],
            "quotes": ["error", "double"],
            "comma-dangle": ["error", "always-multiline"],
            "vue/html-indent": ["error", 4],
            "vue/script-indent": ["error", 4, { baseIndent: 1 }],
            "vue/multi-word-component-names": "off",
        },
    },
);
