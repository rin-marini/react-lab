import { useEffect, useRef } from 'react';

export default function MyInput({
  value,
  onChange
}: {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);  

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}