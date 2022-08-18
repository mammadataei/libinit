import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  replace: {
    'import.meta.vitest': 'undefined',
  },
})
