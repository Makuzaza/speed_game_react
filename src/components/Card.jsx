const Card = ({name, title, age, id, click}) => {
    return (
     <div 
     style={age >= 30 ? { background: "lightgrey" } : { background: "pink" }} className='cards'>
      <h2>Name: {name}</h2>
      <p>Title: {title}</p>
      <p className={age > 40 ? "pink-age" : "blue-age"}>Age: {age}</p>
      <p>ID: {id}</p>
      <button onClick={click}>Remove</button>
    </div>
  );
};

export default Card;