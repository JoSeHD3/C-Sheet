using C_Sheet.Server.Interfaces;
using C_Sheet.Server.Models;

namespace C_Sheet.Server.Services
{
    public class CharacterService : ICharacterService
    {
        private readonly List<Character> _characters;

        public CharacterService()
        {
            _characters = new List<Character>
            {
                new Character { Id = 1, Name = "Aragorn", Class = "Ranger", Level = 5 },
                new Character { Id = 2, Name = "Legolas", Class = "Archer", Level = 4 },
                new Character { Id = 3, Name = "Gandalf", Class = "Wizard", Level = 10 }
            };
        }

        public IEnumerable<Character> GetCharacters()
        {
            return _characters;
        }

        public void Add(Character character) 
        {
            character.Id = _characters.Max(c => c.Id) + 1; 
            _characters.Add(character);
        }
    }
}
