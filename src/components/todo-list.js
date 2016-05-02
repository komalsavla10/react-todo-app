import _ from 'lodash';
import React from 'react';
import TodoListHeader from './todo-list-header'
import TodoListItem from './todo-list-item'
export default class TodoList extends React.Component {

	renderTodoItems() {
		const props = _.omit(this.props, 'todos');

		return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} 
			{...todo} {...props}/>);
	}

	render() {
		return (
			<table>
				<TodoListHeader />
				<tbody>
					{this.renderTodoItems()}
				</tbody>
			</table>
		)
	}
}