module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{ts,js}",
    "!src/**/*.test.ts", // Exclude test files
    "!src/**/__tests__/**", // Exclude test folders
    "!**/node_modules/**", // Exclude dependencies
    "!src/**/*.d.ts", // Exclude type definition files
  ],
};
