import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);
  const [text, setText] = useState(''); // Переносим состояние сюда

  return (
    <div>
      {showHint && (
        <p><i>Hint: Your favorite city?</i></p>
      )}
      <Form text={text} setText={setText} />
      <button onClick={() => {
        setShowHint(!showHint);
      }}>
        {showHint ? 'Hide hint' : 'Show hint'}
      </button>
    </div>
  );
}

function Form({
  text,
  setText
}: {
  text: string,
  setText: (text: string) => void
}) {
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}
