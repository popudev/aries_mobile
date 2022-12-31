module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@screens': './src/screens',
          '@stacks': './src/stacks',
          '@types': './src/types',
          '@components': './src/components',
        },
      },
    ],
  ],
};
