import React, { useState } from 'react';
import TaskList from '../components/TaskList';

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

const TasksPage: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
        { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
    ]);

    const handleAddTask = () => {
        const newTask: Task = {
            id: tasks.length + 1,
            title: `Task ${tasks.length + 1}`,
            description: `Description ${tasks.length + 1}`,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const handleEditTask = (taskId: number, updatedTask: Partial<Task>) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, ...updatedTask } : task
        );
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (taskId: number) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <div className="tasks-page">
            <h1>Task Management</h1>
            <TaskList
                tasks={tasks}
                onAddTask={handleAddTask}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
            />
        </div>
    );
};

export default TasksPage;