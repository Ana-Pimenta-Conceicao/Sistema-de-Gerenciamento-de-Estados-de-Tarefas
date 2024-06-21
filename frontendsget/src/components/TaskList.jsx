import React from 'react';
import TaskCard from './Card';

const TaskList = ({ tasks, updateTaskState, filterState }) => {
  const renderTasks = () => {
    switch (filterState) {
      case 0:
        return tasks.filter(task => task.state === 0).map(task => (
          <TaskCard key={task.id} task={task} updateTaskState={updateTaskState} />
        ));
      case 1:
        return tasks.filter(task => task.state === 1).map(task => (
          <TaskCard key={task.id} task={task} updateTaskState={updateTaskState} />
        ));
      case 2:
        return tasks.filter(task => task.state === 2).map(task => (
          <TaskCard key={task.id} task={task} updateTaskState={updateTaskState} />
        ));
      case 3:
        return tasks.filter(task => task.state === 3).map(task => (
          <TaskCard key={task.id} task={task} updateTaskState={updateTaskState} />
        ));
      default:
        return tasks.map(task => (
          <TaskCard key={task.id} task={task} updateTaskState={updateTaskState} />
        ));
    }
  };

  return (
    <div className="flex flex-col items-center">
      {renderTasks()}
    </div>
  );
};

export default TaskList;