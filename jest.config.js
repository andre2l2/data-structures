module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: ['TS151001'],
      },
    },
  },
};
