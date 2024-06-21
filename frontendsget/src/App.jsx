// App.js
import axios from 'axios';
import { useState, useEffect } from 'react';
import Modal from './components/Modal';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const baseURL = "http://localhost:5036/api/Tasks";
  const [tasks, setTasks] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [filterState, setFilterState] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(baseURL);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const updateTaskState = async (id, action) => {
    try {
      await axios.put(`${baseURL}/${id}/${action}`);
      fetchTasks(); // Atualiza a lista de tarefas após a mudança de estado
    } catch (error) {
      console.error(`Error updating task state: `, error);
    }
  };

  const addTask = async (task) => {
    try {
      await axios.post(baseURL, task);
      fetchTasks();
    } catch (error) {
      console.error('Error adding task: ', error);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleFilterChange = (event) => {
    const selectedState = parseInt(event.target.value, 10);
    setFilterState(selectedState === -1 ? null : selectedState);
  };

  return (
    <div className='min-h-screen w-full'>
      <div className='flex w-full h-full'>

        <div className='flex flex-col justify-center items-center min-h-screen  text-white bg-black w-[600px]   mr-[200px]'>
          <div className='flex justify-center py-5'>
            <h1 className='text-2xl font-semibold'>Sistema de Gerenciamento de Estados de Tarefas</h1>
          </div>
          <div className='flex justify-center py-5'>
            <button
              className='bg-cyan-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
              onClick={openModal}
            >
              Adicionar Tarefa
            </button>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <div className='flex justify-center py-5'>
            <select
              className='bg-white border border-gray-300 w-[300px] pl-4 py-2 rounded'
              onChange={handleFilterChange}
              value={filterState || -1}
            >
              <option value={-1}>Todos</option>
              <option value={0}>Criado</option>
              <option value={1}>Em Progresso</option>
              <option value={2}>Completo</option>
              <option value={3}>Cancelado</option>
            </select>
          </div>

          <TaskList tasks={tasks} updateTaskState={updateTaskState} filterState={filterState} />
          <Modal isOpen={modalIsOpen} closeModal={closeModal}>
            <TaskForm addTask={addTask} closeModal={closeModal} />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;