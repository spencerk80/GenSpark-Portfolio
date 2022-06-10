import {Routes, Route} from 'react-router-dom'

import NavBar  from "./NavBar/NavBar"
import Footer  from "./Footer/Footer"
import AboutMe from "./AboutMe/AboutMe"
import PokemonTeam from "./PokemonTeam/PokemonTeam"

export default function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/' element={<AboutMe />} />
                <Route path='example' element={<PokemonTeam />} />
            </Routes>
            <Footer />
        </div>
    )
}