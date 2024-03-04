import React, { useState } from 'react'
import Products from './Products';
// import { Button } from 'react-bootstrap';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([])

  const YOUR_APP_ID = "8c509c23";
  const YOUR_APP_KEY = "413a4e54ee01b211f829962d8edadc86";

  const submithandler = e => {
    e.preventDefault();
    // console.log(search)
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).
      then(response => response.json()).
      then(data => setData(data.hits))
  }
  return (
    <div>
      <center>
        <h4>Food-Basket-App🤤</h4>
        <form onSubmit={submithandler}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Enter Any Item Here '></input><br></br><br></br>
          <input type="submit" value="Search" className='btn btn-primary'></input>
        </form>
        {data.length>=1 ? <Products data={data}/>:null}
      </center>
    </div>
  )
}

export default App;
