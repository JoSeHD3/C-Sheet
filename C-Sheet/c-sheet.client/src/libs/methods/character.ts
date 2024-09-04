import { ICharacter, TCharacterFormInput } from '@/libs/interfaces/character';
import { API_PATHS } from '../constants';

export const fetchCharacters = async (): Promise<ICharacter[]> => {
  const response = await fetch(API_PATHS.CHARACTER);
  if (!response.ok) throw new Error("couldn't fetch characters");
  return response.json();
};

export const saveCharacter = async (data: TCharacterFormInput) => {
  const payload = {
    name: data.name,
    class: data.className,
    level: data.level,
  };
  try {
    const response = await fetch(API_PATHS.CHARACTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error('Failed to create a character');

    alert('Successfully created a character');
  } catch (error) {
    console.log(error);
    alert('Failed to create a character');
  }
};
