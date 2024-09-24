using Backend.API.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Backend.API.Data
{
    public class BackendDbContext : DbContext
    {
        public BackendDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Employees> Employees { get; set; }

    }
}
