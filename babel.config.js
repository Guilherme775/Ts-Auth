module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@controllers': './src/controllers',
        '@config': './src/config',
        '@database': './src/database',
        '@models': './src/database/models',
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
