import React from 'react';
import ReactDOM from 'react-dom/client';
import './css.css';
import TodoList from './TodoList';
import MyForm from './MyForm';


const h1Element = (
	<>
		<div>
			<h1>Todo list</h1>
			<TodoList />
		</div>

		<div>
			<MyForm />
		</div>
	</>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h1Element);
