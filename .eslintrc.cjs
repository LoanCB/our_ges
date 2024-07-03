module.exports = {
  root: true,

  env: {
    es6: true,
  },

  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:import/typescript', 'eslint-config-prettier'],

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
      rules: {
        'react/no-children-prop': 'off',
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': 1,
        "react/prop-types": "off",
      },
      plugins: ['@typescript-eslint', 'eslint-plugin-prettier'],
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
    {
      files: ['.eslintrc.cjs', 'vite.config.ts'],
      env: { node: true },
    },
    {
      files: ['*.cjs'],
      parserOptions: { sourceType: 'script' },
    },
  ],

  ignorePatterns: ['/build', '/.git', '/.cache'],

  settings: {
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
      },
    },
    'import/core-modules': ['__STATIC_CONTENT_MANIFEST'],
    react: {
      version: 'detect',
    },
  },
};
