import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

export default function App({ Component, pageProps }) {
  
  const client = new ApolloClient({
    uri:"http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return (
    <div>
      <ApolloProvider client={client}>
        <Component/>
      </ApolloProvider>
    </div>
  )
}
