const { ApolloSandbox } = require("apollo-sandbox/react");
export function EmbeddedSandbox() {
  return (
    <ApolloSandbox
      initialEndpoint="http://localhost:4000/"
      includeCookies={false}
    />
  );
}
