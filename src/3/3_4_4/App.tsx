import { useState } from 'react';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const hasNext = index < images.length - 1;

  function handleClick() {
    if (hasNext) 
      setIndex(index + 1);
    else
      setIndex(0);
    setLoading(true); 
  }

  let image = images[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      {loading && <p>Loading...</p>} {}
      <img
        src={image.src}
        onLoad={() => setLoading(false)} 
        style={{ display: loading ? 'none' : 'block' }} 
      />
      <p>
        {image.place}
      </p>
    </>
  );
}

let images = [{
  place: 'Penang, Malaysia',
  src: 'FJeJR8M.jpg'
}, {
  place: 'Lisbon, Portugal',
  src: 'dB2LRbj.jpg'
}, {
  place: 'Bilbao, Spain',
  src: 'z08o2TS.jpg'
}, {
  place: 'Valparaíso, Chile',
  src: 'Y3utgTi.jpg'
}, {
  place: 'Schwyz, Switzerland',
  src: 'JBbMpWY.jpg'
}, {
  place: 'Prague, Czechia',
  src: 'QwUKKmF.jpg'
}, {
  place: 'Ljubljana, Slovenia',
  src: '3aIiwfm.jpg'
}];
