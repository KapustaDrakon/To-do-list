import { useEffect, useState } from 'react';
import { NewTodo } from '../NewTodo/NewTodo';
import { TodoList } from '../TodoList/TodoList';
import './App.css';

function App() {
  let idx = 0;
  let initialState = [
    {label: "Проснуться", edit: false, completed: false, deleted: false, id: idx++},
    {label: "Помяться", edit: false, completed: false, deleted: false, id: idx++},
    {label: "Поесть", edit: false, completed: false, deleted: false, id: idx++},
    {label: "Потянуться", edit: false, completed: false, deleted: false, id: idx++},
    {label: "Пукнуть", edit: false, completed: false, deleted: false, id: idx++},
    {label: "Погулять", edit: false, completed: false, deleted: false, id: idx++},
    {label: "Почитать", edit: false, completed: false, deleted: false, id: idx++},
    {label: "Посмеяться", edit: false, completed: false, deleted: false, id: idx++},
    {label: "Поспать", edit: false, completed: false, deleted: false, id: idx++},
  ]
  const [data, setData] = useState(initialState);
  const [filter, setFilter] = useState('active');

  useEffect(() => {
    if (localStorage.getItem('todoList')) {
      return setData(JSON.parse(localStorage.getItem('todoList')));
    } else localStorage.setItem('todoList', JSON.stringify(data));
  }, []);

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
  }

  const onFilterChange = (filter) => {
    return setFilter(filter);
  }

  const addTodoItem = (label) => {
    const newItem = {label: label, edit: false, completed: false, deleted: false, id: idx++};
    const newArr = [newItem, ...data];
    localStorage.setItem('todoList', JSON.stringify(newArr));
    return setData(newArr);
  }

  const onClear = () => {
    localStorage.removeItem('todoList');
    return setData([]);
  }

  const onCompleted = (id) => {
    const idx = data.findIndex((el) => el.id === id);
    const oldItem = data[idx];
    const newItem = {
      ...oldItem,
      completed: !oldItem.completed,
    }
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
    }
    const newArr = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
    localStorage.setItem('todoList', JSON.stringify(newArr));
    return setData(newArr);
  }

  const visibleItems = filterChange(data, filter);

  console.log(data);
  return (
    <section className="App">
      <NewTodo addTodoItem={addTodoItem} onClear={onClear} />
      <TodoList todos={data} onFilterChange={onFilterChange} visibleItems={visibleItems} onCompleted={onCompleted} onDeleted={onDeleted} />
    </section>
  );
}

export default App;
