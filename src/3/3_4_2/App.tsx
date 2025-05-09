import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );

  return (
    <>
      {reverse ? (
        <>
          <Field label="Last name" value={lastName} onChange={setLastName} />
          <Field label="First name" value={firstName} onChange={setFirstName} />
        </>
      ) : (
        <>
          <Field label="First name" value={firstName} onChange={setFirstName} />
          <Field label="Last name" value={lastName} onChange={setLastName} />
        </>
      )}
      {checkbox}
    </>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={value}
        placeholder={label}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}


