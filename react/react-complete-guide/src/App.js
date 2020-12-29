import React, { Component } from 'react';
import './App.css';
//import styled from 'styled-components';
import Person from './Person/Person';


// const StyledButton = styled.button`
// 	background-color: ${props => props.alt ? 'green' : '#600'};
// 	color: #fff;
// 	font: inherit;
// 	border: 2px solid #600;
// 	border-color:  ${props => props.alt ? 'green' : '#600'};
// 	padding: 8px;
// 	border-radius: 5px;
// 	cursor: pointer;

// 	&:hover {
// 		background-color: salmon;
// 		border-color: salmon;
// 		color: white;
// 	}
// `;

class App extends Component {  
	state = {
		persons: [
			{ id: 'kdff', name: 'Max', age: 28 },
			{ id: 'asdf', name: 'Manu', age: 29 },
			{ id: 'fdsk', name: 'Stephanie', age: 26 },
		],
		otherState: 'some other value',
		showPersons: false,
	};

//event.target.value - 'onChange'(event) input(target) - get value of input
	changedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {  //create new persons index
			return p.id === id;
		});

		const newperson = {  //creates new persons array. use spread to gets all properties by index
			...this.state.persons[personIndex]	
		}

		newperson.name = event.target.value;  //update new person 'name' in new person array 

		const copypersons = [...this.state.persons];  //creates updated new persons array with properties
		copypersons[personIndex] = newperson;  //update the one new person's name by the index in new persons array

		this.setState( {persons: copypersons} )
	}

	deleteHandler = (personIndex) => {
		const duppersons = [...this.state.persons];  
		duppersons.splice(personIndex, 1);  
			this.setState({ persons: duppersons })
	}

	toggleHandler = () => {
		const doesShow = this.state.showPersons 
		this.setState({showPersons: !doesShow})
	}

	render() {
		let classes = []; 					////.className = []

		if(this.state.persons.length <= 2) {
			classes.push('red');  			//classes = ['red']
		}


		if(this.state.persons.length <= 1) {
			classes.push('bold');  			//classes = ['red', 'bold']
		}

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{ this.state.persons.map((person, index) => {
						return <Person 
							click={() => this.deleteHandler(index)}													
							name={person.name}
							age={person.age}
							key={person.id}							
							changed={(event)=> this.changedHandler(event, person.id)}
						/>
					}) }						
				</div>	
			)

		////when toggle clicked to showPerson
		// background-color: 'green';
		// border-color: 'green';
		// color: 'green';			
		}

		return (
			<div className="App">
		    	<h1>Hi, I am a React App</h1> 
		    	<p className={classes.join(' ')}>
		    		This is really working!
		    	</p>  
		    	<button 
		    		className="button"  
		    		onClick={this.toggleHandler}
		    	>Toggle Persons	
		    	</button>	    	
		    	
		    	{ persons }				    	
		    </div>
		); 	
	}
}

 export default App;

 ////export default Radium(App);

// //*****   HOOKS ******  
// //useState allows us to manage statae instead of Components

// import React, { useState } from 'react';  
// import './App.css';
// import Person from './Person/Person';

// //since React 16.8 function-based components was managed using hooks

// const App = props => {  //state array always uses two elements
//      const [ personsState, setPersonsState ] = useState ({ 
// 		persons: [  //accesses personsState
// 			{ name: 'Max', age: 28 },
// 			{ name: 'Manu', age: 29 },
// 			{ name: 'Stephanie', age: 26 },
// 		],
// 		//otherState: 'some other value - will not be affected in setState'
// 	});

//     //const [otherState, setOtherState] = useState('some other value')

//     //console.log(personsState, otherState);
    
// 	const switchNameHandler = () => {
// 		setPersonsState({  //setPersonState creates a new state object
// 			persons: [
// 				{ name: 'Maximillian', age: 28 },
// 				{ name: 'Manu', age: 29 },
// 				{ name: 'Stephanie', age: 27 },
// 			]
// 		});
// 	};
         
// 	return (
// 		<div className="App">
// 	    		<h1>Hello, I am a React App</h1>
// 	    		<p>This is really working!</p>
// 	    		<button onClick={switchNameHandler}>Switch Name</button>	    	
// 	    	<Person 
// 	    		name={ personsState.persons[0].name} 
// 	    		age={ personsState.persons[0].age} 
// 	    	/>
// 	    	<Person 
// 	    		name={ personsState.persons[1].name} 
// 	    		age={ personsState.persons[1].age}
// 	    	/>
// 	    	<Person 
// 	    		name={ personsState.persons[2].name} 
// 	    		age={ personsState.persons[2].age} 
// 	    	/>	    	
// 		</div>
// 	); 	
// };

 //export default App;
