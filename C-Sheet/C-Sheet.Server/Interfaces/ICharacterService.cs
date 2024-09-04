using C_Sheet.Server.Models;

namespace C_Sheet.Server.Interfaces
{
    public interface ICharacterService
    {
        IEnumerable<Character> GetCharacters();
        void Add(Character character);
    }
}
