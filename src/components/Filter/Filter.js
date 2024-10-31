import { useLayoutEffect } from 'react';
import './Filter.css';

export function Filter({ todos, onFilterChange }) {

	useLayoutEffect(() => {
		document.getElementById('active').classList.add('filter__button_active');
	}, []);

	const active = todos.filter((item) => !item.completed && !item.deleted);
	const completed = todos.filter((item) => item.completed);
	const deleted = todos.filter((item) => item.deleted);

	const buttons = [
		{ name: 'active', label: `ТЕКУЩИЕ ДЕЛА${active.length ? ` (${active.length})` : ''}` },
		{ name: 'all', label: `ВСЕ ДЕЛА${todos.length ? ` (${todos.length})` : ''}` },
		{ name: 'completed', label: `ВЫПОЛНЕННЫЕ ДЕЛА${completed.length ? ` (${completed.length})` : ''}` },
		{ name: 'deleted', label: `КОРЗИНА${deleted.length ? ` (${deleted.length})` : ''}` },
	];

	const addClass = (name) => {
		const filterButtons = document.querySelectorAll('.filter__button');
		filterButtons.forEach((button) => button.classList.remove('filter__button_active'));
		document.getElementById(name).classList.add('filter__button_active');
	}

	const filterButtons = buttons.map(({ name, label }) => {
		return (
			<li className='filter__element' key={name}>
				<button className='filter__button' type='button' id={name} onClick={() => {onFilterChange(name); addClass(name)}}>{label}</button>
			</li>
		);
	});

	return (
		<ul className='filter__buttons'>{filterButtons}</ul>
	);
};