import { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {

	static todoInstanceCount = 1;

	constructor() {
		super();
		this.state = {
			thingsTodo: []
		}
	}

	render() {
		return (
			<div className="todo-list-container">
				<div className="list-todo">
					{this.state.thingsTodo.map((t, i) => 
						<Todo key={t.id} libele={t.libele} numOrder={i} />
					)}
				</div>
				<div className="add-todo">
					<div className="line-todo">
						<input type="button" value="Ajouter un Todo" onClick={this.pushTodo}/>
					</div>
				</div>
			</div>
		);
	}

	pushTodo = (e) => {
		this.state.thingsTodo.push({ //increase array.
			id: TodoList.todoInstanceCount++,
			libele: "[no task]"
		});
		this.setState({ thingsTodo: this.state.thingsTodo }); //update array for print.
	}

}

export default TodoList;