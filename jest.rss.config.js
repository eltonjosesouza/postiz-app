module.exports = {
  testEnvironment: 'node',
  transform: { '^.+\\.tsx?$': ['/app/node_modules/ts-jest', { tsconfig: '/workspace/tsconfig.base.json', diagnostics: false }] },
  moduleFileExtensions: ['ts', 'js'],
  roots: ['/workspace/libraries/nestjs-libraries/src'],
};
