import { CharacterItems } from '@/components/characters/CharacterItems';
import { useCharacters } from '@/libs/hooks/useCharacters';
import { useNavigate } from 'react-router-dom';

export const CharacterList = () => {
  const { characters, isLoading, error } = useCharacters();
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading characters.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <CharacterItems characters={characters} navigate={navigate} />
      <div
        className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => navigate('/characters/new')}
      >
        <span className="text-4xl">+</span>
      </div>
    </div>
  );
};
