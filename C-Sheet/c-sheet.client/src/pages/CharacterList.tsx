import { useCharacters } from "@/libs/hooks/useCharacters";

export const CharacterList = () => {
    const { data: characters, isLoading, error } = useCharacters();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading characters.</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            <CharacterList characters={characters} />
            <div
                className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate('/characters/new')}
            >
                <span className="text-4xl">+</span>
            </div>
        </div>
    );
}
