module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/*.spec.ts'],
  roots: ['<rootDir>/src', '<rootDir>/test'],
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: ['TS151001'],
      },
    },
  },
};
