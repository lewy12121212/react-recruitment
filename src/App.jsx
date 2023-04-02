import  * as React from 'react';
import './App.css';
import 'react-bootstrap';
import './styles/main.scss';
import {BrowserRouter, Routes,  Route} from 'react-router-dom';
import {Files} from './Subpages/Files';
import {Charts} from './Subpages/Charts';
import {Calendar} from './Subpages/Calendar';
import {Gear} from './Subpages/Gear';
import {Home} from './Subpages/Home';
import {Navbar} from  './components/Navbar';




 function App () {
  return(
    <BrowserRouter>
    <Navbar>
    <Routes>
    <Route exact path='/Home' element={<Home />}></Route>
    <Route path='/Dokumenty' element={<Files/>}></Route>
    <Route  path='/Raporty' element={<Charts />}></Route>
    <Route path='/Kalendarz' element={<Calendar />}></Route>
    <Route path='/Ustawienia' element={<Gear />}></Route>
     </Routes>
     </Navbar>
  </BrowserRouter>
  );
}
 export default App; 



