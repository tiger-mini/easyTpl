module.exports = {
    root: true,
    env: {
        "node": true
    },
    parser: "vue-eslint-parser",
    extends: [
        'alloy',
        'alloy/vue',
    ],
    parserOptions: {
        "parser": "babel-eslint",
        "sourceType": 'module',
        "ecmaVersion": 6,
    },
    // required to lint *.vue files
    plugins: ["simple-import-sort"],
    globals: {
        document: true,
        window: true
    },
    // add your custom rules here
    rules: {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "vue/component-tags-order": ["error", {
            "order": [ [ "script", "template" ], "style" ]
        }],
        "vue/no-reserved-component-names": ["off", {
            "disallowVueBuiltInComponents": false,
            "disallowVue3BuiltInComponents": false
        }],
        "vue/no-duplicate-attributes": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error"
    }
}
