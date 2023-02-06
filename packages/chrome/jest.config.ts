export default {
  displayName: "chrome",
  preset: "../../jest.preset.js",
  testEnvironment: "jsdom",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "html", "json"],
  coverageDirectory: "../../reports/coverage/packages/chrome",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        addFileAttribute: "true",
        classNameTemplate: "{suitename}",
        outputDirectory: "reports/junit",
        outputName: "chrome.xml",
      },
    ],
  ],
};
