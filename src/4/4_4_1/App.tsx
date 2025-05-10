import { useState } from 'react';
import { initialTodos, createTodo, Todo } from './todos';

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);

  const visibleTodos = showActive ? todos.filter(todo => !todo.completed) : todos;
  const activeTodosCount = todos.filter(todo => !todo.completed).length;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>{activeTodosCount} todos left</footer>
    </>
  );
}

function NewTodo({ onAdd }: { onAdd: (todo: Todo) => void }) {
  const [text, setText] = useState('');

  function handleAddClick() {
    if (text.trim()) {
      onAdd(createTodo(text));
      setText('');
    }
  }

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
}