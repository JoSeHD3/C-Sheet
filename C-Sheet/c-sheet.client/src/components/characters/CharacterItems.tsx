import { ICharacter } from "@/libs/interfaces/character";
import { CharacterCard } from "./CharacterCard";
import { useNavigate } from "react-router-dom";

export const CharacterItems = ({ characters }: { characters: ICharacter[] }) => {
    const navigate = useNavigate();

    return(
    {
        characters.map(character => (
            <CharacterCard
                key={character.id}
                id={character.id}
                name={character.name}
                className={character.className}
                level={character.level}
                onClick={() => navigate(`/characters/${character.id}`)}
            />))
    });
}
