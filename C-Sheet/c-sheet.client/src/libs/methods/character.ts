import { ICharacter } from "@/libs/interfaces/character";

export const fetchCharacters = async (): Promise<ICharacter[]> => {
    const response = await fetch('api/character');
    if (!response.ok) 
        throw new Error('couldn\'t fetch characters');
    return response.json();
}
