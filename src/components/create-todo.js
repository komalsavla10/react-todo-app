import React from 'react';

export default class CreateTodo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null
		}
	}

	renderError() {
		if(this.state.error) {
			return (<div style={{color:'red'}}>{this.state.error}</div>)
		}
		return null;
	}

	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placehplder="What do I Need to do?" ref="createInput"/>
				<button>Create</button>
				{this.renderError()}
			</form>
		)
	}

	handleCreate(event) {
		event.preventDefault()
		const createInput = this.refs.createInput;
		const task = createInput.value;
		
		this.state.error = this.validateInput(task);
		this.setState({error: this.state.error})

		if(this.state.error) {
			return;
		}

		this.state.error = null;
		this.props.createTask(task)
		this.refs.createInput.value="";
	}

	validateInput(task) {
		if(!task) {
			return "Please enter task";
		}else if(_.find(this.props.todos, todo => todo.task == task)) {
			return "Task already exists"	
		}
		
		return null;

	}
}