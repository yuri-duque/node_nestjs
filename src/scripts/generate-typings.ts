/* eslint-disable @typescript-eslint/no-var-requires */
const { GraphQLDefinitionsFactory } = require('@nestjs/graphql');
const { join } = require('path');

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/graphql/*.graphql'],
  path: join(process.cwd(), 'src/graphql/graphql.schema.ts'),
  outputAs: 'class',
});
