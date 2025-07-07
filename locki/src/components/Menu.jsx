import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { handleMenuSelection } from './util/menuUtility';

function Menu({ onMenuSelection, SCREENS }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className="menu-container">
      <div
        className="menu-toggle"
        onClick={toggleMenu}
        style={{ cursor: 'pointer' }}
        aria-label="Toggle menu"
        role="button"
      >
        {menuOpen ? (<CloseIcon fontSize="large" />) : (<MenuIcon fontSize="large" />)}
      </div>

      {menuOpen && (
        <div className="menu-container">
          <h1>Menu</h1>

          {/*==================GENERATOR BUTTON===============*/}
          <button
            className="generator"
            onClick={() =>
              handleMenuSelection(SCREENS.GENERATOR, onMenuSelection, setMenuOpen)
            }
          >
            Generator
          </button>

          {/*==================VAULT BUTTON===============*/}
          <button
            className="vault"
            onClick={() =>
              handleMenuSelection(SCREENS.VAULT, onMenuSelection, setMenuOpen)
            }
          >
            Vault
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;