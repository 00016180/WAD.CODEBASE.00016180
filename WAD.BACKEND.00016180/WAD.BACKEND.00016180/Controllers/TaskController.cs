using Microsoft.AspNetCore.Mvc;
using WAD.BACKEND._00016180.Repositories;
using WAD.BACKEND._00016180.Models;

namespace WAD.BACKEND._00016180.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly IRepository<Models.Task> _taskRepository;
        public TaskController(IRepository<Models.Task> taskRepository)
        {
            _taskRepository = taskRepository;
        }
        // GET: api/Task/Get
        // Retrieves a list of all tasks 00016180
        [HttpGet]
        public async Task<IEnumerable<Models.Task>> GetAll() 
        { 
            return await _taskRepository.GetAll(); 
        }
        // GET: api/Task/GetById/2
        // Retrieves a single task object by Id 00016180
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Models.Task), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _taskRepository.GetById(id);
            // Check if the task exists, otherwise return 404 Not Found 00016180
            return result == null ? NotFound() : Ok(result);
        }
        // POST: api/Task/Create
        // Creates a new task object 00016180
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> Create(Models.Task items)
        {
            // Add the new task to the repository
            await _taskRepository.Add(items);
            // Return the created task data
            return Ok(items);
        }
        // PUT: api/Task/Update
        // Updates an existing task data 00016180
        [HttpPut]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(Models.Task items)
        {
            await _taskRepository.Update(items);
            return NoContent();
        }
        // DELETE: api/Task/Delete/2
        // Deletes a task by Id 00016180
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(int id)
        {
            await _taskRepository.Delete(id);
            return NoContent();
        }
    }
}
