﻿using C_Sheet.Server.Models;

namespace C_Sheet.Server.Interfaces
{
    public interface ICharacterService
    {
        Task<IEnumerable<Character>> GetCharactersAsync();
        Task AddCharacterAsync(Character character);
    }
}
