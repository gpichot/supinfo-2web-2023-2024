import { PokemonCard } from "../components/PokemonCard";
import { usePokemonListQuery } from "../queries/usePokemonListQuery";

export function PokemonListPage() {
  const pokemonListQuery = usePokemonListQuery();

  if (pokemonListQuery.isLoading) {
    return <p>Chargement en cours</p>;
  }

  if (pokemonListQuery.isError) {
    return <p>Erreur au chargement</p>;
  }

  const pokemons = pokemonListQuery.data;

  return (
    <div>
      {pokemonListQuery.isFetching && "Chargement en arrière plan"}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 10,
        }}
      >
        {pokemons?.results.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
