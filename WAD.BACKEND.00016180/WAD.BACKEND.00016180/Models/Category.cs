using System.ComponentModel.DataAnnotations;

namespace WAD.BACKEND._00016180.Models
{
    public class Category
    {
        // Unique Id for category 00016180
        public int Id { get; set; }
        // Backing field for Name property 00016180
        private string _name;
        // Name property is required 00016180
        [Required(ErrorMessage = "Name is required")]
        // Name for category 00016180
        public string Name
        {
            get => _name;
            set
            {   // Validates the name that it is not null or empty 00016180
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Name cannot be null or empty.");
                }

                _name = value;
            }
        }
    }
}
