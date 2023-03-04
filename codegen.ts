import type { CodegenConfig } from '@graphql-codegen/cli'
import { uris } from './app/constants'

const config: CodegenConfig = {
  // TODO: parameterize
  schema: uris.graph,
  documents: ['app/**/*.{ts,tsx}'],
  generates: {
    './app/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        withHooks: true,
        scalars: {
          ID: 'string',
          Bytes: 'string',
          BigInt: 'string',
        },
      },
    },
  },
}
export default config
