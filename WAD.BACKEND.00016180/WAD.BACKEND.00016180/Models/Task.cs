using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WAD.BACKEND._00016180.Models
{
    public class Task
    {
        // Unique Id of task, 00016180
        [Required]
        public int Id { get; set; }
        // Title of task, 00016180
        [Required(ErrorMessage = "Title is required")]
        public string? Title { get; set; }
        // Notes of task, 00016180
        [Required]
        public string? Notes { get; set; }
        // CategoryId of task, 00016180
        public int? CategoryId { get; set; }
        // Category data of task, 00016180
        [ForeignKey("CategoryId")]
        public Category? Category { get; set; }
        // Status of task, 00016180
        [Required]
        public bool? IsCompleted { get; set; } = false;
        // Entered Date of task, 00016180
        [Required]
        public DateTime EnteredDate { get; set; } = DateTime.Now;
        // Due Date of task, 00016180
        [Required]
        public DateTime DueDate { get; set; }
    }
}
