import { Component } from 'react';

class Todo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			idTodo: props.params.idTodo || 0,
			libele: props.params.libele || "[no task]"
		}
	}

	render() {
		return (
			<div className="line-todo">
				<div className="cell-todo">({this.state.idTodo + 1})</div>
				<div className="cell-todo">
					<input type="text" value={this.state.libele} onChange={this.setLibele} />
				</div>
			</div>
		);
	}

	setLibele = (e) => {
		this.setState({ libele: e.target.value }); // update is not updating in ral time !! FIX ME.
	}

}

export default Todo;