import React, { useState, useEfect } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../Images/Menu.svg';
import { ReactComponent as Logo } from '../Images/Logo.svg';
import { ReactComponent as FileIcon } from '../Images/File.svg';
import { ReactComponent as ChartIcon } from '../Images/Chart.svg';
import { ReactComponent as CalendarIcon } from '../Images/Calendar.svg';
import { ReactComponent as GearIcon } from '../Images/Gear.svg';


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

 const handleClick = () => {
  const data = ['Home', 'Gear', 'Files', 'Charts', 'Calendar' ]
  setMenuItems(data);
}

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEfect (()=> {
    fetch('/menu.json')
    .then ((response) => response.json()
    .then ((data) => {
      setMenuItems (data);
    }))
    
  const menuItems = [
    { path: '/', title: 'Pliki', icon: <FileIcon /> },
    { path: '/', title: 'Wykresy', icon: <ChartIcon /> },
    { path: '/', title: 'Kalendarz', icon: <CalendarIcon /> },
    { path: '/', title: 'Ustawienia', icon: <GearIcon /> },
  ];

  } )
  return (
    <nav className='navbar'>
      <div className='navbar-header'>
        <Logo className='navbar-logo' />
        <h1 style={{
         display: isOpen || window.innerWidth > 480 ?  'block' :  'none',
         }} className='Logo'>
         <img src="path/to/logo.png" alt="Logo" style={{height: "35px", marginRight: "10px"}} />
         </h1>
        <button className='navbar-toggle' onClick={handleClick}>
          <MenuIcon className='navbar-menu-icon' />
        </button>
      </div>
      <menu className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
        {menuItems.map((item, index) => (
          <li className='navbar-menu-item' key={index}>
            <NavLink
              className='navbar-menu-link'
              to={item.path}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='navbar-menu-icon'>{item.icon}</div>
              <div className='navbar-menu-title'>{item.title}</div>
            </NavLink>
          </li>
        ))}
      </menu>
    </nav>
  );
};

const menu = document.querySelector('.menu');

fetch ('menu.json')
.then (response => response.json())
.then (data => {
  data.forEach(item => {
    const li = document.createElement  ('li');
    const a = document.createElement('a');
    const icon = document.createElement ('i');

    icon.className =item.icon;
    a.href = item.link;
    a.target = '_blank';
    a.textContent = item.title; 

    a.prepend (icon);
    li.append (a);
    menu.append(li);
  })
})

const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle !== null){
menuToggle.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('show');
  
})
}