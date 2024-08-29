import React from 'react';
import UserList from './UserList';
import './App.css'; // Optional for global styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User List Application</h1>
      </header>
      <UserList />
    </div>
  );
}

export default App;
