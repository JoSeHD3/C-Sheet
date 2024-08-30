import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "@/libs/constants"
import { fetchCharacters } from "@/libs/methods/character"

export const useCharacters = () => {
    const { data: characters, isLoading, error } = useQuery({
        queryKey: [QUERY_KEYS.CHARACTERS_KEY],
        queryFn: fetchCharacters,
    });

    return { characters, isLoading, error };
}
