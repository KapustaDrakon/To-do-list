import { useState } from 'react';
import { ButtonClear } from '../ButtonClear/ButtonClear';
import './NewTodo.css';

export function NewTodo({addTodoItem, onClear}) {
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
        <div>
            <form onSubmit={onSubmit}>
                <button type='submit'>Добавить</button>
                <input type='text' id='new_todo' placeholder='Пополните список ...' onChange={onChangeLabel} autoFocus value={label} />
            </form>
            <ButtonClear onClear={onClear} />
        </div>
    )
}