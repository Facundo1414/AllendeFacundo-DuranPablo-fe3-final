import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeProvider from '../Components/utils/global.context';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeProvider);

  const navbarStyle = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black';
  const linkStyle = theme === 'dark' ? 'text-white' : 'text-black';

  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <nav className={`w-auto flex justify-center ${navbarStyle}`}>
      <div className={`flex w-3/4 gap-x-12`}>
        <Link className={`${linkStyle}`} to="/home">Home</Link>
        <Link className={`${linkStyle}`} to="/contact">Contact</Link>
        <Link className={`${linkStyle}`} to="/favs">Favorites</Link>
      </div>
      <button className="pretty-button" onClick={changeTheme}>Change theme</button>    </nav>
  );
}

export default Navbar;