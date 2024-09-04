export interface ICharacter {
  id: string;
  name: string;
  className: string;
  level: number;
}

export interface ICharacterCard extends ICharacter {
  onClick: () => void;
}

export type TCharacterFormInput = Omit<ICharacter, 'id'>;
