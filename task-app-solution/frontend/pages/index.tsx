import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Task Application</h1>
            <p>This application allows you to manage your tasks efficiently.</p>
            <a href="/tasks">Go to Task Management</a>
        </div>
    );
};

export default Home;
