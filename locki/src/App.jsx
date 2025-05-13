import Header from './components/Header'
import Nav from './components/Nav'
import HomeContent from './components/HomeContent'
import PassGen from './components/PasswordGenerator'
import Settings from './components/Settings'
import Vault from './components/AccountVault'
import VaultForm from './components/VaultForm'
import VaultItem from './components/VaultItem'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <HomeContent />
      <PassGen />
      <Settings />
      <Vault />
      <VaultForm />
      <VaultItem />
    </>
  )
}

export default App
