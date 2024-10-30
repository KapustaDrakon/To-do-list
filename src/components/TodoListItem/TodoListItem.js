import './TodoListItem.css';

export function TodoListItem({item, onCompleted, onDeleted}) {
    console.log(item)
    return (
        <li>
            <div>
                <span>{item.label}</span>
                <button type='button' onClick={onCompleted} />
                <button type='button' onClick={onDeleted} />
            </div>
        </li>
    )
};