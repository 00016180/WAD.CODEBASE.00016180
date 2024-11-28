using Microsoft.EntityFrameworkCore;
using WAD.BACKEND._00016180.Models;

namespace WAD.BACKEND._00016180.Data
{
    public class TaskTrackerDbContext: DbContext
    {
        // Initialize new database instance 00016180
        public TaskTrackerDbContext(DbContextOptions<TaskTrackerDbContext> options) : base(options) { }
        // Gets or sets Task entities
        public DbSet<Models.Task> Tasks { get; set; }
        // Gets or sets Category entities
        public DbSet<Category> Categories { get; set; }
    }
}
