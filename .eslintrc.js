module.exports = {
  root: true,
  extends: 'vuepress',
  globals: {
    __VUEPRESS_VERSION__: 'readonly',
    __VUEPRESS_DEV__: 'readonly',
    __VUEPRESS_SSR__: 'readonly',
    __VUE_HMR_RUNTIME__: 'readonly',
  },
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      extends: 'vuepress-typescript',
      parserOptions: {
        project: ['tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/component-tags-order': [
          'error',
          {
            order: ['script', 'template', 'style'],
          },
        ],
      },
    },
    {
      files: ['*.vue'],
      globals: {
        defineEmits: 'readonly',
        defineProps: 'readonly',
      },
      rules: {
        // disable for setup script
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['clientAppEnhance.ts'],
      rules: {
        'vue/match-component-file-name': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*.ts'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'vue/one-component-per-file': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['docs/**', 'example/**'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
