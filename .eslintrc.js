module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'prettier',
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
        'airbnb',
    ],
    plugins: [],
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/multi-word-component-names': ['off'],
        'import/extensions': ['ts', 'never'],
    },
};
