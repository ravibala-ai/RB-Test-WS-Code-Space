import React, { useState } from 'react';

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onAddTask: () => void;
    onEditTask: (taskId: number, updatedTask: Partial<Task>) => void;
    onDeleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onAddTask, onEditTask, onDeleteTask }) => {
    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
    const [editedDescription, setEditedDescription] = useState<string>('');

    const handleEditClick = (task: Task) => {
        setEditingTaskId(task.id);
        setEditedDescription(task.description);
    };

    const handleSaveClick = (taskId: number) => {
        onEditTask(taskId, { description: editedDescription });
        setEditingTaskId(null);
        setEditedDescription('');
    };

    const handleToggleCompletion = (task: Task) => {
        onEditTask(task.id, { completed: !task.completed });
    };

    return (
        <div className="task-list-container">
            <h2>Task List</h2>
            <button className="add-task-button" onClick={onAddTask}>
                Add New Task
            </button>
            <table className="task-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id} className={task.completed ? 'completed' : 'pending'}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>
                                {editingTaskId === task.id ? (
                                    <input
                                        type="text"
                                        value={editedDescription}
                                        onChange={(e) => setEditedDescription(e.target.value)}
                                    />
                                ) : (
                                    task.description
                                )}
                            </td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleToggleCompletion(task)}
                                />
                                {task.completed ? ' Complete' : ' Pending'}
                            </td>
                            <td>
                                {editingTaskId === task.id ? (
                                    <button className="save-button" onClick={() => handleSaveClick(task.id)}>
                                        Save
                                    </button>
                                ) : (
                                    <button className="edit-button" onClick={() => handleEditClick(task)}>
                                        Edit
                                    </button>
                                )}
                                <button className="delete-button" onClick={() => onDeleteTask(task.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;