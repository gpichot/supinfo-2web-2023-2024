import { useQuery } from "@tanstack/react-query";
import { PokemonDetail } from "../types";

export function usePokemonDetailQuery(pokemonId: string | number) {
  return useQuery({
    queryKey: ["pokemon-detail", pokemonId],
    queryFn: async () => {
      const response = await fetch(
        `https://pokeapi.fly.dev/2webd/pokemons/${pokemonId}`
      );
      const json = await response.json();
      return json as PokemonDetail;
    },
  });
}
