import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Route, Routes} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { NavBarComponent } from './components/NavBarComponent/NavBarComponent'

import { HomePage } from './Pages/HomePage/HomePage';
import { ChampionListPage } from './Pages/ChampionListPage/ChampionListPage';
import { ItemsPage } from './Pages/ItemsPage/ItemsPage'
import { ChampionDetailsPage } from './Pages/ChampionDetailsPage/ChampionDetailsPage';
import { MapsPage } from './Pages/MapsPage/MapsPage';
import { TestPage } from './Pages/TestPage/TestPage';
import { NotFoundPage } from './Pages/NotFoundPage/NotFoundPage';

const App = (props) => {

  return (
      <BrowserRouter>

        {/* Navbar */}
        <NavBarComponent/>

        <Container className=''>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/champions' element={<ChampionListPage/>} />
            <Route path='/champions/:championId' element={<ChampionDetailsPage/>} />
            <Route path='/items' element={<ItemsPage/>} />
            <Route path='/maps' element={<MapsPage/>} />
            <Route path='/test' element={<TestPage/>} />
            <Route path='*' element={<NotFoundPage/>} /> 
          </Routes>
        </Container>
      </BrowserRouter>
  );
}

export default App;