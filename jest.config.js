/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  collectCoverage: true, // Включает сбор покрытия кода
  coverageDirectory: 'coverage', // Директория, куда будут сохраняться отчёты
  coverageReporters: ['json', 'lcov', 'text', 'clover'], // Форматы отчётов
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', // Файлы, для которых нужно собирать покрытие
    '!src/**/*.d.ts', // Исключение для файлов деклараций
]
};