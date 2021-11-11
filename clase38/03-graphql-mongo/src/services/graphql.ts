const { SchemaComposer } = require('graphql-compose');
const { TaskQuery, TaskMutation } = require('../controllers/tasks');

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...TaskQuery,
});

schemaComposer.Mutation.addFields({
  ...TaskMutation,
});

export const graphQLMainSchema = schemaComposer.buildSchema();
