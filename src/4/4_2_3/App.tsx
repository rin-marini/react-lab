import { useState, useRef, useEffect } from 'react';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const catRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const currentCat = catRefs.current[index];
    if (currentCat) {
      currentCat.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [index]);

  return (
    <>
      <nav>
        <button onClick={() => {
          if (index < catList.length - 1)
            setIndex(index + 1);
          else
            setIndex(0);
        }}>
          Next
        </button>
      </nav>
      <div style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
          {catList.map((cat, i) => (
            <li key={cat.id} style={{ marginRight: '10px' }}>
              <img
                ref={el => catRefs.current[i] = el!}
                className={index === i ? 'active' : ''}
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

type PlaceType = {
  id: number;
  imageUrl: string;
}

const catList: PlaceType[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `cat${i}.jpg`
  });
}

