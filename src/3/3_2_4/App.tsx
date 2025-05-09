import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const selectedCount = selectedIds.length;

  function handleToggle(toggledId: number) {
    setSelectedIds(prevSelected => {
      if (prevSelected.includes(toggledId)) 
        return prevSelected.filter(id => id !== toggledId);
      else
        return [...prevSelected, toggledId];
    });
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.includes(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}

