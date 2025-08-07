import React from 'react';
import ReactDOM from 'react-dom/client';
import './css.css';
import TodoList from './TodoList';


const h1Element = (
	<div>
		<h1>Todo list</h1>
		<TodoList />
	</div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h1Element);
