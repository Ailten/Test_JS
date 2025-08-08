import { Component } from 'react';

class Todo extends Component {

	constructor(props) {
		super(props); //props is for sending data from html parameters.
		this.state = { //state is for maintaine data betwing html user interaction and class/prototype (see also useState).
			numOrder: props.numOrder || 0,
			libele: props.libele || "[no task]"
		}
	}

	render() {
		return (
			<div className="line-todo">
				<div className="cell-todo">({this.state.numOrder + 1})</div>
				<div className="cell-todo">
					<input type="text" value={this.state.libele} onChange={(e) => { this.setLibele(e.target.value) }} />
				</div>
				<div className="cell-todo">
					<input type="button" value="alert" onClick={this.alertLibele} style={{color: "#990000"}}/>
				</div>
			</div>
		);
	}

	setLibele = (libele) => {
		this.setState({ libele: libele }); // update is not updating in ral time !! FIX ME.
	}

	alertLibele = () => {
		alert(this.state.libele);
	}

}

export default Todo;