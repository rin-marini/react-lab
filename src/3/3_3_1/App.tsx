import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  return (
    <>
      <Input label="First input" text={text} setText={setText} />
      <Input label="Second input" text={text} setText={setText} />
    </>
  );
}

function Input({
  label,
  text,
  setText
}: {
  label: string;
  text: string;
  setText: (value: string) => void;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <label>
      {label}{' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}

