using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTO.Stock
{
    public class CreateStockRequestDTO
    {
        [Required]
        [MaxLength(10, ErrorMessage ="Symbol can't be longer than 10 characters.")]
        public string Symbol { get; set; } = string.Empty;
        [Required]
        [MaxLength(100, ErrorMessage ="Symbol can't be longer than 100 characters.")]
        public string CompanyName { get; set; } = string.Empty;
        [Required]
        [Range(1,1000000000000)]
        public decimal Purchase { get; set; }
        [Required]
        [Range(0.001, 100)]
        public decimal LastDiv { get; set; }
        [Required]
        [MaxLength(50, ErrorMessage = "Industry can't have length over 50 characters.")]
        public string Industry { get; set; } = string.Empty;
        [Required]
        [Range(1,100000000000000)]
        public long MarketCap { get; set; }
    }
}