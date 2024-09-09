using C_Sheet.Server.Interfaces;
using C_Sheet.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace C_Sheet.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CharacterController : ControllerBase
    {
        private readonly ICharacterService _characterService;

        public CharacterController(ICharacterService characterService)
        {
            _characterService = characterService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Character>>> Get()
        {
            var characters = await _characterService.GetCharactersAsync();
            return Ok(characters);
        }
        [HttpPost]
        public async Task<IActionResult> CreateCharacter([FromBody] Character newCharacter)
        {
            if (newCharacter == null)
            {
                return BadRequest("Character is null.");
            }

            await _characterService.AddCharacterAsync(newCharacter);
            return Ok(newCharacter);
        }
    }
}
