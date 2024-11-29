using Microsoft.AspNetCore.Mvc;
using WAD.BACKEND._00016180.Models;
using WAD.BACKEND._00016180.Repositories;

namespace WAD.BACKEND._00016180.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IRepository<Category> _categoryRepository;
        public CategoryController(IRepository<Category> categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }
        // GET: api/Category/Get
        // Retrieves a list of all categories 00016180
        [HttpGet]
        public async Task<IEnumerable<Category>> GetAll()
        {
            return await _categoryRepository.GetAll();
        }
        // GET: api/Category/GetById/2
        // Retrieves a single category object by Id 00016180
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _categoryRepository.GetById(id);
            // Check if the category exists, otherwise return 404 Not Found 00016180
            if (result == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(result);
            }
        }
        // POST: api/Category/Create
        // Creates a new category object 00016180
        [HttpPost]
        public async Task<IActionResult> Create(Category categories)
        {
            // Add the new category to the repository
            await _categoryRepository.Add(categories);
            // Return the created resource
            return CreatedAtAction(nameof(GetById), new { id = categories.Id }, categories);
        }
        // PUT: api/Category/Update
        // Updates an existing category data 00016180
        [HttpPut]
        public async Task<IActionResult> Update(Category categories)
        {
            await _categoryRepository.Update(categories);
            return NoContent();
        }
        // DELETE: api/Category/Delete/2
        // Deletes a category by Id 00016180
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _categoryRepository.Delete(id);
            return NoContent();
        }
    }
    
}
