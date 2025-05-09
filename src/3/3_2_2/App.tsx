import { useState } from 'react';
import AddItem from './AddItem.js';
import PackingList from './PackingList.js';

export type Item = {
  id: number,
  title: string,
  packed: boolean
}

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(title: string) {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false
      }
    ]);
  }

  function handleChangeItem(nextItem: Item) {
    setItems(items.map(item =>
      item.id === nextItem.id ? nextItem : item
    ));
  }

  function handleDeleteItem(itemId: number) {
    setItems(items.filter(item => item.id !== itemId));
  }

  const total = items.length;
  const packed = items.filter(item => item.packed).length;

  return (
    <>  
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>{packed} out of {total} packed!</b>
    </>
  );
}