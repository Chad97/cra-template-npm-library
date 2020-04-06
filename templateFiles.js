module.exports = {
  husky: {
    config: '.huskyrc',
    template: 'huskyrc-template',
  },
  templateDir: './template',
  files: [
    '.env',
    '.eslintrc',
    '.lintstagedrc',
    '.nvmrc',
    '.prettierrc',
    '.stylelintrc',
    'babel.config.js',
    'jsconfig.json',
    'prepare.js',
    'README.md',
    'rollup.config.js',
    'public',
    'src',
  ],
};