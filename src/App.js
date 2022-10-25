import logo from './logo.svg';
import WeatherMain from './com/WeatherDay/WeatherMain';
import WeatherMain2 from './com/WeatherDay/WeatherMain2';
import {Route,Routes} from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Main from './com/WeatherDay/Main';


function App() {
  return (
    <>
      {/* <Nav /> */}
      {/* <Main /> */}

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/p1' element={<WeatherMain />} />
        <Route path='/p2' element={<WeatherMain2 />} />
      </Routes>
      </>
  );
}

export default App;
