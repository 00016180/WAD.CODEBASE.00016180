using Microsoft.EntityFrameworkCore;
using WAD.BACKEND._00016180.Data;
using WAD.BACKEND._00016180.Models;
using Task = System.Threading.Tasks.Task;

namespace WAD.BACKEND._00016180.Repositories
{
    // Repository for managing Category 00016180
    public class CategoryRepository: IRepository<Category>
    {
        // Initializes a new instance 00016180
        private readonly TaskTrackerDbContext _context;

        public CategoryRepository(TaskTrackerDbContext context)
        {
            _context = context;
        }
        // Get all categories from database 00016180
        public async Task<IEnumerable<Category>> GetAll() => await _context.Categories.ToArrayAsync();
        // Get category by id from database 00016180
        public async Task<Category> GetById(int id) => await _context.Categories.FindAsync(id);
        // Add new category to database 00016180
        public async Task Add(Category categories)
        {
            await _context.Categories.AddAsync(categories);
            await _context.SaveChangesAsync();
        }
        // Update category data 00016180
        public async Task Update(Category categories)
        {
            _context.Entry(categories).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
        // Delete category from database 00016180
        public async Task Delete(int id)
        {
            var entity = await _context.Categories.FindAsync(id);
            if (entity != null)
            {
                _context.Categories.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
