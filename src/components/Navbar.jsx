import '../styles/Header.css';
import React, {useState} from 'react';
import {HiBars4} from 'react-icons/hi2';
import { AiOutlineFile, AiOutlineCalendar} from "react-icons/ai";
import { BsGear} from "react-icons/bs";
import { BiBarChartSquare } from "react-icons/bi";
import {Link} from 'react-router-dom';
import {App} from '../App';

export const Header = () => {

const [active, setActive] = useState (false);

const activateNav = () => {
    setActive(!active)
};

useEffect(() => {
    fetch('../public/menuData.json')
      .then((response) => response.json())
      .then((data) => setMenuData(data));
  }, []);


return(

 <div className={active ? 'header' : 'header-mobile'}>

    <div className='menu-icon' onClick={activateNav}>
    
    {!active ? <HiBars4 className='menu'/>  : <aiOutlineClose className='close-icon'/>}

    </div>

<nav>
    <ul className={active ? 'ul-item'  : 'ul-item oicon'}>
        <li>
         <AiOutlineFile className='icon'/>
         <Link to ="File">Dokumenty</Link>
        </li>

         <li>
         <BiBarChartSquare className='icon chart'/>
         <Link to ="Charts">Raporty</Link>
        </li>

         <li>
        <AiOutlineCalendar className='icon'/>
         <Link to ="Calendar">Kalendarz</Link>
        </li>

        <li>
        <BsGear className='icon'/>
        <Link to ="Gear">Ustawienia</Link>
        </li>

        </ul>
        </nav>
        </div>
    
    )
}