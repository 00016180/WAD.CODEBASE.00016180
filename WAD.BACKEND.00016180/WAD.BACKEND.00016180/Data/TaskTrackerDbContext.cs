using Microsoft.EntityFrameworkCore;
using WAD.BACKEND._00016180.Models;

namespace WAD.BACKEND._00016180.Data
{
    public class TaskTrackerDbContext: DbContext
    {
        public TaskTrackerDbContext(DbContextOptions<TaskTrackerDbContext> options) : base(options) { }

        public DbSet<Models.Task> Task { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
