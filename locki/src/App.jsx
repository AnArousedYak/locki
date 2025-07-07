import { useState } from 'react';
import Menu from './components/Menu';
import Generator from './components/Generator';
import Vault from './components/Vault';
import SCREENS from './components/util/Screens';


function App() {
  // useState to track the current screen, setting the initial screen to none!
  const [currentScreen, setCurrentScreen] = useState(SCREENS.NONE);

  return (
    <>
      <Menu onMenuSelection={setCurrentScreen} SCREENS={SCREENS} />

      {currentScreen === SCREENS.GENERATOR && <Generator />}
      {currentScreen === SCREENS.VAULT && <Vault />}
    </>
  );
}

export default App;