import expressApp from './services/server';

const PORT = 8080;
expressApp.listen(PORT, () =>
  console.log(
    `Express GraphQL Server Now Running On http://localhost:${PORT}/graphql`
  )
);
