using SistemaGerenciadorDeEstadoDeTarefas.Models.ENUM;

namespace SistemaGerenciadorDeEstadoDeTarefas.Models
{

    public class Tasks
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public TaskState State { get; set; }
    }
}
