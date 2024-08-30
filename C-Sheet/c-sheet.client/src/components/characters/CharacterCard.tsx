import { ICharacterCard } from "@/libs/interfaces/character";

export const CharacterCard = ({ name, level, className, onClick }: ICharacterCard) => 
    <div
        className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
        onClick={onClick}
    >
        <h2 className="text-xl font-bold">{name}</h2>
        <p>Class: {className}</p>
        <p>Level: {level}</p>
    </div>
