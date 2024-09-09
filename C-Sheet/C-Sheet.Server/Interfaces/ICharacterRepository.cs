using C_Sheet.Server.Models;

namespace C_Sheet.Server.Interfaces
{
    public interface ICharacterRepository
    {
        Task<IEnumerable<Character>> GetCharactersAsync();
        Task AddCharacterAsync(Character character);
    }
}
