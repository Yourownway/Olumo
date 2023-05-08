
import AboutUs from './components/organismes/AboutUs'
import Home from './components/organismes/Home'
import NosProduits from './components/organismes/NosProduits'
import NosSecteurs from './components/organismes/NosSecteurs'

export default function App() {
  return (
    <main className="px-30">
     <Home/>
     <NosSecteurs/>
     <NosProduits/>
     <AboutUs/>
    </main>
  )
}
