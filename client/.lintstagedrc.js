const lint = (filenames) => `yarn lint ${filenames.join(' ')}`

const runPrettier = (filenames) =>
  `yarn prettier --write ${filenames.join(' ')}`

export default {
  '*.{ts,tsx}': [lint, runPrettier],
  '*.(md|json)': [runPrettier],
}
