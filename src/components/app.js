import _ from 'lodash';
import React from 'react';
import TodoList from './todo-list';
import CreateTodo from './create-todo';

const todos = [
	{
		task: 'make React Tutorial',
		completed:false
	},
	{
		task: 'Eat Dinner',
		completed: true
	},
];

export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			todos
		};

	}

	render() {
		return (
			<div>
				<h1>React Todos App</h1>
				<CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
				<TodoList 
					todos={this.state.todos}
					toggleTask={this.toggleTask.bind(this)}
					saveTask={this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}
					/>
			</div>
		)
	}

	createTask(task) {
		this.state.todos.push({
			task,
			completed: false
		});

		this.setState({todos : this.state.todos});

	}

	toggleTask(task) {
		const found = _.find(this.state.todos, todo => todo.task == task);
		found.completed = !found.completed;
		this.setState({todos : this.state.todos});

	}

	saveTask(oldTask, newTask) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask)
		foundTodo.task = newTask;
		this.setState({todos : this.state.todos});
	}

	deleteTask(taskToDelete) {
		_.remove(this.state.todos, todo => todo.task === taskToDelete)
		this.setState({todos : this.state.todos});
	}
}