const lint = () => `eslint --report-unused-disable-directives --max-warnings 0`

const runPrettier = (filenames) =>
  `yarn prettier --write ${filenames.join(' ')}`

export default {
  '*.{js,jsx,ts,tsx}': [lint, runPrettier],
  '*.(md|json)': [runPrettier],
}
