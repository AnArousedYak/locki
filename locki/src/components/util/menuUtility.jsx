export const toggleMenu = (setMenuOpen) => {
  setMenuOpen(prev => !prev);
};

export const handleMenuSelection = (screen, onMenuSelection, setMenuOpen) => {
  onMenuSelection(screen);
  setMenuOpen(false);
};