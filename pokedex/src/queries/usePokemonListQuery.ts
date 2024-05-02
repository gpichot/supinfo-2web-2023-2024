import { useQuery } from "@tanstack/react-query";
import { PokemonDetail } from "../types";

interface PokemonListResponse {
  count: number;
  results: PokemonDetail[];
}
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function usePokemonListQuery() {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: async () => {
      await sleep(2000);
      const response = await fetch(`https://pokeapi.fly.dev/2webd/pokemons/`);
      const json = await response.json();
      return json as PokemonListResponse;
    },
  });
}
