import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
	state = {
		persons: [
			{ name: 'vishesh', age: 21 },
			{ name: 'ashish', age: 22 },
			{ name: 'nikhil', age: 23 },
		]
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

	render() {

		const style = {
			backgroundColor: 'grey',
			font: 'inherit',
			border: '1px solid white',
			padding: '8px',
			cursor: 'pointer'
		};

		return (
			<div className="App">
				<header className="App-header">
	
					<h1>Hello, React world</h1>
					<button 
						onClick={ this.switchNameHandler.bind(this, 'Vishesh Pandita') }
						style={style} >Switch Name</button>
	
					<Person 
						name={this.state.persons[0].name} 
						age={this.state.persons[0].age} 
						click={() => this.switchNameHandler('Vishesh Pandit')} >Table Tennis</Person>
	
					<Person 
						name={this.state.persons[1].name} 
						age={this.state.persons[1].age}
						click = {this.upppercaseNameHandler} >Table Tennis</Person>
	
					<Person 
						name={this.state.persons[2].name} 
						age={this.state.persons[2].age}
						changed={this.nameChangedHandler} >Table Tennis</Person>
	
				</header>
			</div>
		);

	}

}

export default App;
