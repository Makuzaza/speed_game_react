# React demo

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

´this is important´

```js
this is very important
```

Destructuring:

```js
const [persons, setPersons] = useState([
  { id: 1, name: "Margit", title: "CEO", age: 29 },
  { id: 2, name: "Kati", title: "developer", age: 25 },
  { id: 3, name: "Karin", title: "designer", age: 45 },
]);

const Card = (props) => {
  return (
    <div class="cards">
      <h2>Name: {props.name}</h2>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
      <button onClick={props.click}>Close</button>
    </div>
  );
};

export default Card;

{
  persons.map((person) => <Card key={person.id} {...person} />);
}
```

Images in react:

```js
import image from "./assets/react.svg";

export default function App()  {
    return (
  <div>
    <main>
      <img src={image} alt="React logo" />
    </main>
  </div>
)};

export default App;
```

Styling in react:

```js
return (
  <div
    style={age >= 30 ? { background: "lightgrey" } : { background: "pink" }}
    className="cards"
  ></div>
);
```

Handling events:

Passing a method to the child

```js
const Person = (props) => {
  return (
    <div className="box">
      <h1>{props.name}</h1>
      <button onClick={props.click}>Click me</button>
    </div>
  );
};
<Person name="Maria" click={clickHandler} />;
```

Passing arguments to event handlers

```js
constclickHandler = (id) => {
  console.log(id);
};
<button onClick={() => clickHandler(id)}> Like </button>

<button onClick={clickHandler.bind(this, id)}> Like </button>;
```

Modifying states:

```js
const [persons, setPersons] = useState([
  { id: 1, name: "Margit", title: "CEO", age: 29 },
]);

function handleClick() {
  setPersons("Maria");
}
```

”remove” event

```js
const removeHandler = (id) => {
  const updatedArray = persons.filter((person) => person.id !== id);
  setPersons(updatedArray);
};
```

Input:

```js
const [search, setSearch] = useState("");
constsearchHandler = (event) => {
  setSearch(event.target.value);
};
return (
  <div>
    <input type="text" onChange={searchHandler} />
    {persons.filter((person) => person.name.includes(search)).map((person) => Card key={person.id}
        />)}
  </div>
);
```
