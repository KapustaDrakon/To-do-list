import { useState } from 'react';
import './NewTodo.css';

export function NewTodo({ addTodoItem, onClear }) {
	const [label, setLabel] = useState('');

	const onChangeLabel = (e) => {
		return setLabel(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (label !== '' && label.split(' ').length - 1 !== label.length) {
			addTodoItem(label);
			setLabel('');
		}
	};

	return (
		<div className='newtodo__container'>
			<form className='newtodo__form' onSubmit={onSubmit}>
				<button className='newtodo__button-submit' type='submit'>+ ДОБАВИТЬ</button>
				<input className='newtodo__input-text' type='text' id='new_todo' placeholder='Пополните список ...' onChange={onChangeLabel} autoFocus value={label} />
				<button className='newtodo__button-clear' type='button' onClick={onClear}>ОЧИСТИТЬ<div className='newtodo__button-clear_icon'></div></button>
			</form>
		</div>
	)
}