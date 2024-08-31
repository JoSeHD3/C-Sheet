import { ICharacter } from '@/libs/interfaces/character';
import { CharacterCard } from './CharacterCard';
import { NavigateFunction } from 'react-router-dom';

export const CharacterItems = ({
  characters,
  navigate,
}: {
  characters?: ICharacter[];
  navigate: NavigateFunction;
}) => {
  return characters?.map((character) => (
    <CharacterCard
      key={character.id}
      id={character.id}
      name={character.name}
      className={character.className}
      level={character.level}
      onClick={() => navigate(`/characters/${character.id}`)}
    />
  ));
};
