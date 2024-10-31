import { NewTodo } from '../NewTodo/NewTodo';
import { TodoList } from '../TodoList/TodoList';
import './Main.css';

export function Main({ todos, onFilterChange, visibleItems, onCompleted, onDeleted, addTodoItem, onClear, setSignIn }) {

	const onLogout = () => {
		localStorage.removeItem('todoList_SignIn');
    return setSignIn(false);
	}

	return (
		<div className='main'>
			<NewTodo addTodoItem={addTodoItem} onClear={onClear} />
			<TodoList todos={todos} onFilterChange={onFilterChange} visibleItems={visibleItems} onCompleted={onCompleted} onDeleted={onDeleted} />
			<button className='main__button-logout' type='button' onClick={onLogout}>Выход</button>
		</div>
	)
}