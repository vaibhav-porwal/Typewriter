import React from 'react';
import './App.css';
import { randomElementSelector } from './helper/random';
import { typingTestData } from './Data/source';
import { testDetailsCalculator } from './helper/testDetailsCalculator';
import { TestContainer } from './Components/TestContainer/TestContainer';
const defaultState={
	timestarted:false,
	timervalue:60,
	selecteddata:randomElementSelector(typingTestData),
	details:
	{
		words:0,
		character:0,
		mistakes:0
	}

}
class App extends React.Component {
	constructor () {
		super();

		this.state =  defaultState;

	}
	handleInput = (input) =>{			
		if(!this.state.timestarted)
		this.starttime();
		this.setState({details:testDetailsCalculator(this.state.selecteddata,input)})
	}
	triggertryagain =() =>this.setState(defaultState);
	starttime=()=>{
		this.setState({timestarted:true})
		const timer=setInterval(()=>{
			if(this.state.timervalue>0)
			{
				this.setState({timervalue:this.state.timervalue-1})
			}else
			clearInterval(timer);
		},1000)

	}

	render() {
		return (
			<div className="app-container">
				<h1 className="main-heading">TypeWriter</h1>
				<div className="test-container-main">
					<TestContainer
					handleInput={this.handleInput}
					timestarted={this.state.timestarted}
					timervalue={this.state.timervalue}
					triggertryagain={this.triggertryagain}
					selecteddata={this.state.selecteddata}
					words={this.state.details.words}
					character={this.state.details.character}
					mistakes={this.state.details.mistakes}
					/>	</div>
			</div>
		)
	}
}

export default App;
