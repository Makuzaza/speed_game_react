import { Link } from "react-router-dom";

function Home () {
    return (
        <>
        <h1>Home will be here</h1>
        <a href="/persons">Persons</a>
        <Link to='/persons'>Persons</Link>
        </>
    );
}

export default Home;