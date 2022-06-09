import React from 'react'

import PokemonCard from '../PokemonCard/PokemonCard'
import getPokemon from '../../services/PokemonService'
import './PokemonTeam.css'

let [pokeData, setPokeData] = [[], ()=>{}]

export default function PokemonTeam() {  
    
    [pokeData, setPokeData] = React.useState([])

    return(
        <main onLoad={buildCards}>
            <div className='team-list'>
                {buildCards()}
            </div>
            <button className='pokemon-btn' type='button' 
                    onClick={() => setPokeData(getPokemon())}>
                Get Team
            </button>
            <h2>
                Note:
            </h2>
            <p>
                This page is an example usage of calling an external API and using React to
                display the data returned. Simply click the button above and React will call
                the API for 6 random Pokémon and display them.
            </p>
        </main>
    )
}

function buildCards() {

    pokeData = pokeData.map(poke =>
        <PokemonCard
            key  = {poke.key}
            img  = {poke.img}
            name = {poke.name}
            type = {poke.type}
        />
    )   
    return pokeData
}
