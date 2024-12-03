using Microsoft.EntityFrameworkCore;
using WAD.BACKEND._00016180.Data;
using Task = System.Threading.Tasks.Task;
using WAD.BACKEND._00016180.Models;

namespace WAD.BACKEND._00016180.Repositories
{
    // Repository for managing Tasks
    public class TaskRepository: IRepository<Models.Task>
    {
        // Initializes a new instance 00016180
        private readonly TaskTrackerDbContext _context;

        public TaskRepository(TaskTrackerDbContext context)
        {
            _context = context;
        }
        // Get all tasks from database 00016180
        public async Task<IEnumerable<Models.Task>> GetAll()
        {
            return await _context.Tasks.Include(t => t.Category).ToArrayAsync();
        }

        // Get task by id from database 00016180
        public async Task<Models.Task> GetById(int id)
        {
            return await _context.Tasks.Include(t => t.Category).FirstOrDefaultAsync(t => t.Id == id);
        }
        // Add new task to database 00016180
        public async Task Add(Models.Task entity)
        {
            if (entity.CategoryId == null)
                throw new ArgumentException("CategoryId cannot be null.");

            entity.Category = await _context.Categories.FindAsync(entity.CategoryId.Value);

            if (entity.Category == null)
                throw new ArgumentException("Invalid CategoryId.");

            await _context.Tasks.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        // Update task data 00016180
        public async Task Update(Models.Task entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
        // Delete task from database 00016180
        public async Task Delete(int id)
        {
            var entity = await _context.Tasks.FindAsync(id);
            if (entity != null)
            {
                _context.Tasks.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
