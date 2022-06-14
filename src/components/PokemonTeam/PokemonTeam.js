import React from 'react'

import PokemonCard from '../PokemonCard/PokemonCard'
import getPokemon from '../../services/PokemonService'
import './PokemonTeam.css'

let [pokeData, setPokeData] = [[], ()=>{}]

export default function PokemonTeam() {  
    
    [pokeData, setPokeData] = React.useState([])

        //Find which pokemon was clicked and flip the useShinyImg bool
        function flipImg(id) {
            setPokeData(prevPokeData => 
                prevPokeData.map(poke => 
                    poke.id === id ? {...poke, useShinyImg : !poke.useShinyImg} : poke
                ))
        }

        //Get a new team. Disable the button during fetch and re-enable after
        async function getNewTeam() {
            const btn = document.getElementById('poke-btn')

            btn.disabled = true
            btn.innerText = 'Loading...'
            setPokeData(await getPokemon())
            btn.innerText = 'Get Team'
            btn.disabled = false
        }

    return(
        <main onLoad={buildCards}>
            <div className='team-list'>
                {buildCards(flipImg)}
            </div>
            <button 
                className='pokemon-btn' 
                id='poke-btn'
                type='button' 
                onClick={getNewTeam}>
                Get Team
            </button>
            <h2>
                Note:
            </h2>
            <p>
                This page is an example usage of calling an external API and using React to
                display the data returned. Simply click the button above and React will call
                the API for 6 random Pokémon and display them.<br/>
                <strong>You can also click on the image of any pokemon to change whether it's normal or shiny!</strong>
            </p>
        </main>
    )
}

function buildCards(flipImg) {

    let cardID = 0

    pokeData = pokeData.map(poke =>
        <PokemonCard
            key         = {cardID++}
            id          = {poke.id}
            img         = {poke.useShinyImg ? poke.shinyImg : poke.frontImg}
            name        = {poke.name}
            type        = {poke.type}
            updateImg   = {flipImg}
        />
    )   
    return pokeData
}
