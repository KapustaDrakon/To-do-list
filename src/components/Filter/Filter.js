import './Filter.css';

export function Filter({todos, onFilterChange}) {
    const active = todos.filter((item) => !item.completed && !item.deleted);
    const completed = todos.filter((item) => item.completed);
    const deleted = todos.filter((item) => item.deleted);

    const buttons = [
        {name: 'active', label: `Текущие дела${active.length ? ` (${active.length})`: ''}`},
        {name: 'all', label: `Все дела${todos.length ? ` (${todos.length})`: ''}`},
        {name: 'completed', label: `Выполненные дела${completed.length ? ` (${completed.length})`: ''}`},
        {name: 'deleted', label: `Корзина${deleted.length ? ` (${deleted.length})`: ''}`},
    ];

    const filterButtons = buttons.map(({name, label}) => {
        return (
            <li key={name}>
                <button type='button' onClick={() => onFilterChange(name)}>{label}</button>
            </li>
        );
    });

    return (
        <ul>{filterButtons}</ul>
    );
};