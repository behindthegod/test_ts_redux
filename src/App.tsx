import React from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import PhotoList from "./components/PhotoList";

function App() {
  return (
    <div>
        <UserList/>
        <TodoList/>
        <PhotoList/>
    </div>
  );
}

export default App;
