import { Item } from './App';

export default function PackingList({
  items,
  onChangeItem,
  onDeleteItem
} : {
  items: Item[],
  onChangeItem: (item: Item) => void,
  onDeleteItem: (id: number) => void
}
) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={e => {
                onChangeItem({
                  ...item,
                  packed: e.target.checked
                });
              }}
            />
            {' '}
            {item.title}
          </label>
          <button onClick={() => onDeleteItem(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
