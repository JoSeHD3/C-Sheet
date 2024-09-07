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
        public ActionResult<IEnumerable<Character>> Get()
        {
            try
            {
                var characters = _characterService.GetCharacters();
                return Ok(characters);
            }
            catch (ApplicationException ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }
        [HttpPost]
        public IActionResult CreateCharacter([FromBody] Character newCharacter)
        {
            try
            {
                if (newCharacter == null)
                {
                    return BadRequest(new { message = "Character data is required." });
                }

                _characterService.Add(newCharacter);
                return Ok(newCharacter);
            }
            catch (ApplicationException ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }
    }
}
