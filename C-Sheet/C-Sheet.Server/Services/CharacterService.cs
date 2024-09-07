using C_Sheet.Server.Interfaces;
using C_Sheet.Server.Models;
using MongoDB.Driver;

namespace C_Sheet.Server.Services
{
    public class CharacterService : ICharacterService
    {
        private readonly IMongoCollection<Character> _characters;

        public CharacterService(IMongoCollection<Character> characters)
        {
            _characters = characters;
        }

        public IEnumerable<Character> GetCharacters()
        {
            try
            {
                return _characters.AsQueryable().ToList();
            }
            catch (Exception ex)
            {
                throw new ApplicationException("An error occurred while retrieving characters.", ex);
            }
        }

        public void Add(Character newCharacter) 
        {
            try
            {
                Character? existingCharacter = _characters.AsQueryable().FirstOrDefault(c => c.Name == newCharacter.Name);
                if (existingCharacter != null)
                {
                    throw new ApplicationException($"A character with the name '{newCharacter.Name}' already exists.");
                }

                _characters.InsertOne(newCharacter);
            }
            catch (Exception ex)
            {
                throw new ApplicationException("An error occurred while adding a new character.", ex);
            }
        }
    }
}
