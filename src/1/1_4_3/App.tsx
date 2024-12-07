// 1_4_3 Write an expression inside JSX curly braces
/* 
  В приведенном ниже объекте полный URL изображения разделен на четыре части: базовый URL, imageId, imageSize и расширение файла.

  Исправьте ошибку с заданием src в <img>.
*/


const baseUrl = 'http://localhost:5173/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: 'GregorioYZara',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize + ".jpg"}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}