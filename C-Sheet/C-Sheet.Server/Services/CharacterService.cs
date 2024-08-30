using C_Sheet.Server.Interfaces;
using C_Sheet.Server.Models;

namespace C_Sheet.Server.Services
{
    public class CharacterService : ICharacterService
    {
        public IEnumerable<Character> GetCharacters()
        {
            return new List<Character>
            {
                new Character { Id = 1, Name = "Aragorn", Class = "Ranger", Level = 5 },
                new Character { Id = 2, Name = "Legolas", Class = "Archer", Level = 4 },
                new Character { Id = 3, Name = "Gandalf", Class = "Wizard", Level = 10 }
            };
        }
    }
}
