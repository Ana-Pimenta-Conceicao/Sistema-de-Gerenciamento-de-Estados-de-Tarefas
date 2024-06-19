//using SistemaGerenciadorDeEstadoDeTarefas.Models;

//namespace SistemaGerenciadorDeEstadoDeTarefas.States
//{
//    public class CreatedState : ITaskState
//    {
//        public void Start(Tasks tasks)
//        {
//            tasks.SetState(new InProgressState());
//        }

//        public void Complete(Tasks tasks)
//        {
//            throw new InvalidOperationException("Tarefas 'Criadas' não podem ser concluídas imediatamente.");
//        }

//        public void Cancel(Tasks tasks)
//        {
//            tasks.SetState(new CancelledState());
//        }

//        public string GetState()
//        {
//            return "Criada!";
//        }
//    }
//}
