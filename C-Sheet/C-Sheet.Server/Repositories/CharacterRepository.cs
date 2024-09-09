using C_Sheet.Server.Database;
using C_Sheet.Server.Interfaces;
using C_Sheet.Server.Models;
using MongoDB.Driver;

namespace C_Sheet.Server.Repositories
{
    public class CharacterRepository : ICharacterRepository
    {
        private readonly IMongoCollection<Character> _characters;

        public CharacterRepository(DbContext dbContext)
        {
            _characters = dbContext.GetCollection<Character>("characters");
        }

        public async Task<IEnumerable<Character>> GetCharactersAsync()
        {
            return await _characters.Find(_ => true).ToListAsync();
        }

        public async Task AddCharacterAsync(Character character)
        {
            await _characters.InsertOneAsync(character);
        }
    }
}
