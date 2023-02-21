module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'mjs'],
  transform: {
    '^.+\\.m?js$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|mtest).js?(x)'],
  globals: {
    'react-native': {
      // Mocks out all the native modules and components.
      View: 'View',
    },
  },
  esModulesInterop: true,
};