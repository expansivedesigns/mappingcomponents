import React from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`  		//create a functional/class-based component
		width: 60%;
		margin: 16px auto;
		border: 1px solid #333;
		box-shadow: 0 2px 3px #ccc;
		padding: 16px;
		text-align: center;
		border-radius: 5px;

	@media(min-width: 500px) {
		width: 400px;				//at 250px+ change width to 400px 
	}
`;   

const Person = props => { 
	return (
		<StyleDiv>  							
			<p onClick={props.click}>
				I am {props.name} and I am {props.age} years old!
			</p>
			<p>{props.children}</p>
			<input type='text' onChange={props.changed} value={props.name}/> 
		</StyleDiv>
	)
}

export default Person;


