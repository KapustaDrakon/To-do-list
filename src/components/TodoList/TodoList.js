import { Filter } from '../Filter/Filter';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import './TodoList.css';

export function TodoList({todos, onFilterChange, visibleItems, onCompleted, onDeleted}) {

    

    const elements = visibleItems.map((item) => {
        return (
            <div key={item.id}>
                <TodoListItem item={item} onCompleted={() => onCompleted(item.id)} onDeleted={() => onDeleted(item.id)} />
            </div>
        )
    });

    return (
        <div>
            <Filter todos={todos} onFilterChange={onFilterChange} />
            <ul>{elements}</ul>
        </div>
    );
}