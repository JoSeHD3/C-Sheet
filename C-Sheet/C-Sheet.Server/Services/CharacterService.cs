using C_Sheet.Server.Interfaces;
using C_Sheet.Server.Models;
using MongoDB.Driver;

namespace C_Sheet.Server.Services
{
    public class CharacterService : ICharacterService
    {
        private readonly ICharacterRepository _characterRepository;

        public CharacterService(ICharacterRepository characterRepository)
        {
            _characterRepository = characterRepository;
        }

        public async Task<IEnumerable<Character>> GetCharactersAsync()
        {
            return await _characterRepository.GetCharactersAsync();
        }

        public async Task AddCharacterAsync(Character newCharacter) 
        {
            await _characterRepository.AddCharacterAsync(newCharacter);
        }
    }
}
