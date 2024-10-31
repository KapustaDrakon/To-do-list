import { useEffect, useLayoutEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Main } from '../Main/Main';
import { SignIn } from '../SignIn/SignIn';
import './App.css';

function App() {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState('active');
	const [signIn, setSignIn] = useState(false);
	let [idState, setIdState] = useState(0);

	const getIdState = () => {
		data.forEach((el) => {
			while (el.id === idState) setIdState(++idState);
		});
		return idState;
	}

	useEffect(() => {
		if (localStorage.getItem('todoList')) {
			return setData(JSON.parse(localStorage.getItem('todoList')));
		};
	}, []);

	useLayoutEffect(() => {
		if (localStorage.getItem('todoList_SignIn')) {
			return setSignIn(true);
		};
	}, [signIn]);

	const filterChange = (items, filter) => {
		switch (filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter((item) => !item.completed && !item.deleted);
			case 'completed':
				return items.filter((item) => item.completed);
			case 'deleted':
				return items.filter((item) => item.deleted);
			default:
				return items;
		}
	};

	const onFilterChange = (filter) => {
		return setFilter(filter);
	};

	const addTodoItem = (label) => {
		const newItem = { label: label, edit: false, completed: false, deleted: false, id: getIdState() };
		const newArr = [newItem, ...data];
		localStorage.setItem('todoList', JSON.stringify(newArr));
		return setData(newArr);
	};

	const onClear = () => {
		localStorage.removeItem('todoList');
		return setData([]);
	};

	const onCompleted = (id) => {
		const idx = data.findIndex((el) => el.id === id);
		const oldItem = data[idx];
		const newItem = {
			...oldItem,
			completed: !oldItem.completed,
		};
		const newArr = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
		localStorage.setItem('todoList', JSON.stringify(newArr));
		return setData(newArr);
	};

	const onDeleted = (id) => {
		const idx = data.findIndex((el) => el.id === id);
		const oldItem = data[idx];
		const newItem = {
			...oldItem,
			deleted: !oldItem.deleted,
		};
		const newArr = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
		localStorage.setItem('todoList', JSON.stringify(newArr));
		return setData(newArr);
	};

	const visibleItems = filterChange(data, filter);

	return (
		<Router className="App">
			<Routes>
				<Route path="/" element={!signIn ? <Navigate to="/sign_in" replace /> : <Navigate to="/todo" replace />} />
				<Route path="/sign_in" element={!signIn ? <SignIn setSignIn={setSignIn} /> : <Navigate to="/todo" replace />} />
				<Route path="/todo" element={!signIn ? <Navigate to="/sign_in" replace /> : <Main
							todos={data}
							onFilterChange={onFilterChange}
							visibleItems={visibleItems}
							onCompleted={onCompleted}
							onDeleted={onDeleted}
							addTodoItem={addTodoItem}
							onClear={onClear}
							setSignIn={setSignIn}
						/>} />
				<Route path="*" element={<div className='app__page404'>Page not found. Error 404</div>} />
			</Routes>
		</Router>
	);
}

export default App;
