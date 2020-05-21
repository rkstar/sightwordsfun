module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          data: './src/data',
          shared: './src/shared',
          navigation: './src/navigation',
          packages: './src/packages',
          screens: './src/screens',
        },
      },
    ],
  ],
};
