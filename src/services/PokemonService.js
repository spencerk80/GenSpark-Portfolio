import Pokemon from '../models/Pokemon'
import testData from '../testdata'

export default function getPokemon() {
    const rawData = getPokemonData()
    const team = []

    rawData.forEach(rawPokemonData => {
        let pokemon = new Pokemon()

        pokemon.key   = rawPokemonData.id
        pokemon.name  = rawPokemonData.name[0].toUpperCase() + rawPokemonData.name.slice(1)
        pokemon.img   = rawPokemonData.sprites.front_default
        pokemon.type  = `${rawPokemonData.types[0].type.name} ${rawPokemonData.types[1] ? rawPokemonData.types[1].type.name : ''}`
        team.push(pokemon)
    })

    return team

}

function getPokemonData() {
    return testData
}