const lint = () => `eslint --fix`

const runPrettier = (filenames) =>
  `yarn prettier --write ${filenames.join(' ')}`

export default {
  '*.{js,jsx,ts,tsx}': [lint, runPrettier],
  '*.(md|json)': [runPrettier],
}
