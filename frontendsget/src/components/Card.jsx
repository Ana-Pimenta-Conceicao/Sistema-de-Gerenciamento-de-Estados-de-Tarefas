import React from 'react';

const Card = ({ task, updateTaskState }) => {
  const getTaskState = (state) => {
    switch (state) {
      case 0:
        return 'Criado';
      case 1:
        return 'Em Progresso';
      case 2:
        return 'Completo';
      case 3:
        return 'Cancelado';
      default:
        return 'Desconhecido';
    }
  };

  return (
    <div className={`shadow-md rounded-lg p-6 mb-4 w-[300px] text-gray-800 ${task.state === 0 ? 'bg-white' : task.state === 1 ? 'bg-blue-200' : task.state === 2 ? 'bg-green-200' : 'bg-red-200'}`}>
      <h2 className="text-lg font-semibold mb-2">ID: {task.id}</h2>
      <h3 className="text-xl font-bold mb-2">{task.name}</h3>
      <p className="text-gray-700 mb-2">{task.description}</p>
      <p className='text-gray-600 mb-4 '>{getTaskState(task.state)}</p>
      <div className="flex justify-center gap-x-3">
        {task.state === 0 && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => updateTaskState(task.id, 'start')}
          >
            Iniciar
          </button>
        )}
        {task.state === 1 && (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => updateTaskState(task.id, 'complete')}
          >
            Completar
          </button>
        )}
        {(task.state === 0 || task.state === 1) && (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => updateTaskState(task.id, 'cancel')}
          >
            Cancelar
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
