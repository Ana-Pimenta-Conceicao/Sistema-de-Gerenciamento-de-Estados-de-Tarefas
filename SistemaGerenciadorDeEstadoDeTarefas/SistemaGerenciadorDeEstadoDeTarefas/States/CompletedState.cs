//using SistemaGerenciadorDeEstadoDeTarefas.Models;

//namespace SistemaGerenciadorDeEstadoDeTarefas.States
//{
//    public class CompletedState : ITaskState
//    {
//        public void Start(Tasks tasks)
//        {
//            throw new InvalidOperationException("Tarefas finalizadas não podem ser iniciadas novamente ");
//        }

//        public void Complete(Tasks tasks)
//        {
//            throw new InvalidOperationException("Tarefa já finalizada");
//        }

//        public void Cancel(Tasks tasks)
//        {
//            throw new InvalidOperationException("Tarefas finalizadas não podem ser canceladas");
//        }

//        public string GetState()
//        {
//            return "Finalizada";
//        }
//    }
//}
