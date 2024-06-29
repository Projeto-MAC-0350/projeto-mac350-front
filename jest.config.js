/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    // if your using tsconfig.paths thers is no harm in telling jest
    "@components/(.*)$": "<rootDir>/src/components/$1",
    "@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },  
  transformIgnorePatterns: [
    'node_modules/*' // Replace "module-name" with actual module names
  ],
  // to obtain access to the matchers.
  setupFilesAfterEnv: ["./setupTests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePaths: ["<rootDir>"],
  testEnvironment: "jsdom",
};
