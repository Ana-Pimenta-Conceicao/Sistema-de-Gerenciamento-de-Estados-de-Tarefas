
using Microsoft.EntityFrameworkCore;
using SistemaGerenciadorDeEstadoDeTarefas.Models;


namespace SistemaGerenciadorDeEstadoDeTarefas.Data
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options) { }
        public DbSet<Tasks> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tasks>()
                .Property(t => t.State);

            base.OnModelCreating(modelBuilder);
        }
    }
}
