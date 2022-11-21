import { Route, Routes } from 'react-router-dom';
import Menu from '../Menu';
import Movie from '../Movie/Movie';
import MovieList from '../MovieList';
import './App.css';

function App() {


  return (
    <div className="App">

        <Menu/>

        <Routes>
          <Route path='/' element={<MovieList/>} ></Route>
          <Route path='/movie/:id' element={<Movie/>} ></Route>
        </Routes>

    </div>
  );
}

export default App;
