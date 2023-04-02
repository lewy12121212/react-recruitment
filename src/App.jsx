import  * as React from 'react';
import './App.css';
import {BrowserRouter, Routes,  Route} from 'react-router-dom';
import {File} from './Subpages/File';
import {Chart} from './Subpages/Chart';
import {Calendar} from './Subpages/Calendar';
import {Gear} from './Subpages/Gear';
import {Home} from './Subpages/Home';
import {Header} from  './components/Navbar';




 function App () {
  return(
    <BrowserRouter>
    <Header>
    <Routes>
    <Route exact path='/Home' element={<Home />}></Route>
    <Route path='/Dokumenty' element={<File/>}></Route>
    <Route  path='/Raporty' element={<Chart />}></Route>
    <Route path='/Kalendarz' element={<Calendar />}></Route>
    <Route path='/Ustawienia' element={<Gear />}></Route>
     </Routes>
     </Header>
  </BrowserRouter>
  );
}
 export default App; 



