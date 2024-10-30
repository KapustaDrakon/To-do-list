import './ButtonClear.css';

export function ButtonClear({onClear}) {
    return (
        <button onClick={onClear}>Очистить</button>
    )
}