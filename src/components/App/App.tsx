import Menu from '../Menu';
import MovieList from '../MovieList';
import './App.css';

function App() {


  return (
    <div className="App">
      <div className='side-drawer'>
        <Menu/>
      </div>
      <div className='home-list'>
        <MovieList/>
      </div>
    </div>
  );
}

export default App;
