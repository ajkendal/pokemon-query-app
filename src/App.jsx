import './App.css'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { PokemonsContainer } from './containers/PokemonsContainer'

function App() {
  const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://graphql-pokemon2.vercel.app/' }),
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  )
}

export default App
