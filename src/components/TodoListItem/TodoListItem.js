import './TodoListItem.css';

export function TodoListItem({ item, onCompleted, onDeleted }) {
	return (
		<li className='item'>
			<div className='item__content'>
				<span className='item__label'>{item.label}</span>
				<div>
					<button className='item__button-complete' type='button' onClick={onCompleted} />
					<button className='item__button-delete' type='button' onClick={onDeleted} />
				</div>
			</div>
		</li>
	)
};