import { Component } from 'react';

class User extends Component{

	constructor(props){
		super(props);
		this.test = 0;
	}

	render() {
		return (
			<>
				<div style={{boder: 'solide 1px'}}>
					<div> I m a user</div>
					<div>{this.props.name}</div>
				</div>
			</>
		);
	}

}

export default User;