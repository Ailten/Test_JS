

class Todo {

	static idCount = 1;

	constructor() {
		this.id = Todo.idCount++;
		this.libele = "[Empty Task]";
	}

	render() {
		return (
			<div className="line-todo">
				<div className="cell-todo">({this.id})</div>
				<div className="cell-todo">
					<input type="text" value={this.libele} onChange={this.setLibele} />
				</div>
			</div>
		);
	}

	setLibele = (e) => {
		this.libele = e.target.value; // update is not updating in ral time !! FIX ME.
	}

}

export default Todo;