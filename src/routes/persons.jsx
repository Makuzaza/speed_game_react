import Header from '../components/header';
import Footer from '../components/footer';
import Card from '../components/Card';
import image from '../assets/react.svg';

function Persons ({searchHandler, persons, search, removeHandler}) {
    return (  
        <>  
    
      <main>
      <h1>Persons:</h1>
      <img src={image} alt="React logo" />
      <div><input type="text" onChange={searchHandler}></input></div>
<div className='card'>
      {persons.filter(i => i.name.toLowerCase().includes(search.toLowerCase())).map((person) => 
      (<Card key={person.id}
        {...person}
        click={() => removeHandler(person.id)}
        />
        ))};
</div>
      </main>
      
       </> 
    );
}

export default Persons;

