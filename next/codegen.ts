import { CodegenConfig } from '@graphql-codegen/cli'

const codegenConfig: CodegenConfig = {
  // eslint-disable-next-line pii/no-ip
  schema: 'http://127.0.0.1:1337/graphql',
  documents: './src/services/graphql/queries/**/*.{gql,graphql}',
  generates: {
    './src/services/graphql/index.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      // config: {
      //   enumsAsTypes: true
      // }
    },
  },
}

export default codegenConfig
