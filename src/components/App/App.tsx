import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Menu from '../Menu';
import Movie from '../Movie/Movie';

import './App.css';

function App() {


  return (
    <div className="App">

        <Menu/>

        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/movie/:id' element={<Movie/>} ></Route>
        </Routes>

    </div>
  );
}

export default App;
