import { useState } from 'react';

function MyForm() {
	const [name, setName] = useState(""); //useState, for track change easily of a parameter in a form html (can be a full object in case of many input).

	const myEventWhenSubmit = (event) => {
		event.preventDefault();
		alert(`you'r submited your name : ${name}`);
	}

	return (
		<form onSubmit={myEventWhenSubmit}>
			<label for="name">name :</label>
			<input id="name" type="text" value={name} onChange={ (e) => setName(e.target.value) }/>
			<input type="submit" />
		</form>
	);
}

export default MyForm;