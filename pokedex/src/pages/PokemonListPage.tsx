import { PokemonCard } from "../components/PokemonCard";
import { PokemonsMocks } from "../pokemons.mocks";

export function PokemonListPage() {
  return (
    <div>
      {PokemonsMocks.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
