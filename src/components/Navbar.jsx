import React from 'react';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'><a href="#sobre-nos">Sobre Nós</a></li>
        <li className='navbar-item'><a href="#por-que-investir">Por que investir?</a></li>
        <li className='navbar-item'><a href="#produtos">Produtos</a></li>
        <li className='navbar-item'><a href="#orcamento">Orçamento</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;