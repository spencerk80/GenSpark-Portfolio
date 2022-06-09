import PokemonCard from '../PokemonCard/PokemonCard'
import sampleData from '../../testdata'
import './PokemonTeam.css'

export default function PokemonTeam() {    
    return(
        <main>
            <div className='team-list'>
                {buildCards()}
            </div>
            <button className='pokemon-btn' type='button'>
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
    let pokeData = sampleData
    // let type2 = pokeData.types[1].type.name ? pokeData.types[0].type.name : ''

    pokeData = pokeData.map(poke =>
        <PokemonCard
            key = {poke.id }
            img = {poke.sprites.front_default}
            name = {poke.name[0].toUpperCase() + poke.name.slice(1)}
            type = {`${poke.types[0].type.name} ${poke.types[1] ? poke.types[1].type.name : ''}`}
        />
    )   
    return pokeData
}