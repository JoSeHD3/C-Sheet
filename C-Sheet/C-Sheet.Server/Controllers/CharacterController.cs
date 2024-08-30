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
        public IEnumerable<Character> Get()
        {
            return _characterService.GetCharacters();
        }
    }
}
