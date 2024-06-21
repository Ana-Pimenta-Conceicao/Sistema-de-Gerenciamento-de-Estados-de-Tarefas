import React, { useState } from 'react';

const TaskForm = ({ addTask, closeModal }) => {
    const [newTask, setNewTask] = useState({ name: '', description: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addTask(newTask);
        closeModal();
    };

    return (
        <div>
            <h2 className="text-xl mb-4 w-[400px]">Cadastrar Nova Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nome</label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={newTask.name}
                        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Descrição</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={newTask.description}
                        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                        required
                    />
                </div>
                <div className="flex items-center justify-end gap-x-3">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Cadastrar
                    </button>
                    <button
                        onClick={closeModal}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Fechar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;