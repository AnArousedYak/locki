export const toggleMenu = (setMenuOpen) => {
  setMenuOpen(prev => !prev);
};

export const handleMenuSelection = (screen, onSelect, setMenuOpen) => {
  onSelect(screen);
  setMenuOpen(false);
};