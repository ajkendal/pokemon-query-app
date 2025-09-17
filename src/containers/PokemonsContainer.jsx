import { useQuery } from '@apollo/client/react'
import { Pokemon } from '../components/Pokemon'
import { GET_POKEMONS } from '../graphql/get-pokemon'

export function PokemonsContainer() {
  const { data } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  })
  const pokemons = data?.pokemons || []
  return (
    <div className='container'>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
