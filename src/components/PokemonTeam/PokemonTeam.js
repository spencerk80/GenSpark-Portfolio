import React from 'react'
import { useTranslation } from 'react-i18next'

import PokemonCard from '../PokemonCard/PokemonCard'
import getPokemon from '../../services/PokemonService'
import './PokemonTeam.css'

let [pokeData, setPokeData] = [[], ()=>{}]

export default function PokemonTeam() {  
    
    [pokeData, setPokeData] = React.useState([])
    const {t} = useTranslation()

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
            btn.innerText = t('example-button-loading')
            setPokeData(await getPokemon())
            btn.innerText = t('example-button-get')
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
                {t('example-button-get')}
            </button>
            <h2>
                {t('example-note-header')}
            </h2>
            <p>
                {t('example-note')}<br/>
                <strong>{t('example-note-strong')}</strong>
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
            useShinyImg = {poke.useShinyImg}
            name        = {poke.name}
            type        = {poke.type}
            updateImg   = {flipImg}
        />
    )   
    return pokeData
}
