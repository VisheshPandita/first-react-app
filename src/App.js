import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
	state = {
		persons: [
			{ name: 'vishesh', age: 21 },
			{ name: 'ashish', age: 22 },
			{ name: 'nikhil', age: 23 },
		],
		showPersons: false
	}
	
	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{ name: newName, age: 21 },
				{ name: 'Ashish', age: 22 },
				{ name: 'Nikhil', age: 23 },
			]
		})
	}

	upppercaseNameHandler = () => {
		this.setState({
			persons: [
				{ name: 'VISHESH', age: 21 },
				{ name: 'ASHISH', age: 22 },
				{ name: 'NIKHIL', age: 23 },
			]
		})
	}

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'VISHESH', age: 21 },
				{ name: 'ASHISH', age: 22 },
				{ name: event.target.value, age: 23 },
			]
		})
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}

	deletePersonHandler = () => {
		
	}

	render() {

		const style = {
			backgroundColor: 'grey',
			font: 'inherit',
			border: '1px solid white',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

		if(this.state.showPersons){
			persons = (
				<div>
					{this.state.persons.map(person => {
						return <Person 
						name={person.name}
						age={person.age} />
					})}
				</div>
			);
		}

		return (
			<div className="App">
				<header className="App-header">
	
					<h1>Hello, React world</h1>
					<button 
						onClick={ this.togglePersonsHandler } 
						style={style} >Switch Name</button>
	
					{persons}
	
				</header>
			</div>
		);

	}

}

export default App;
