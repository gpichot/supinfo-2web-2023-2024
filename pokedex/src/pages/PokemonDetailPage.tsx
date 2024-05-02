import { useParams } from "react-router-dom";
import { usePokemonDetailQuery } from "../queries/usePokemonDetailQuery";

export function PokemonDetailPage() {
  const { pokemonId } = useParams();

  if (!pokemonId) throw new Error("Pokemmon id is null");

  const pokemonDetailQuery = usePokemonDetailQuery(pokemonId);

  if (pokemonDetailQuery.isLoading) {
    return <p>Loading</p>;
  }

  const { data: pokemon } = pokemonDetailQuery;
  if (pokemonDetailQuery.isError || !pokemon) {
    return <p>Erreur</p>;
  }

  return <h1>{pokemon.name}</h1>;
}
