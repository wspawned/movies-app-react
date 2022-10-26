import { getPopularMovies, getMovieGenres } from '../../api/tmdbAPI';
import Menu from '../Menu';
import './App.css';

function App() {

  getMovieGenres();

  return (
    <div className="App">
      <div className='side-drawer'>
        <Menu/>
      </div>
      <p>
        HELLO
      </p>
    </div>
  );
}

export default App;
