//using SistemaGerenciadorDeEstadoDeTarefas.Models;

//namespace SistemaGerenciadorDeEstadoDeTarefas.States
//{
//    public class InProgressState : ITaskState
//    {
//        public void Start(Tasks tasks)
//        {
//            throw new InvalidOperationException("Essa tarefa já está em progresso");
//        }

//        public void Complete(Tasks tasks)
//        {
//            tasks.SetState(new CompletedState());
//        }

//        public void Cancel(Tasks tasks)
//        {
//            tasks.SetState(new CancelledState());
//        }

//        public string GetState()
//        {
//            return "Em Produção";
//        }
//    }
//}
