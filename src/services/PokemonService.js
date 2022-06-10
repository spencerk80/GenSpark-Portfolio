import Pokemon from '../models/Pokemon'
// import testData from '../testdata'

export default async function getPokemon() {
    const rawData = await getPokemonData()
    const team = []

    rawData.forEach(rawPokemonData => {
        let pokemon = new Pokemon()

        pokemon.id          = rawPokemonData.id
        pokemon.name        = rawPokemonData.name[0].toUpperCase() + rawPokemonData.name.slice(1)
        pokemon.frontImg    = rawPokemonData.sprites.front_default
        pokemon.shinyImg    = rawPokemonData.sprites.front_shiny
        pokemon.type        = `${rawPokemonData.types[0].type.name} ${rawPokemonData.types[1] ? rawPokemonData.types[1].type.name : ''}`
        team.push(pokemon)
    })

    return team

}


async function getPokemonData() {
    const res1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 720) + 1}`)
    const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 720) + 1}`)
    const res3 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 720) + 1}`)
    const res4 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 720) + 1}`)
    const res5 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 720) + 1}`)
    const res6 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 720) + 1}`)
    const rawData1 = await res1.json()
    const rawData2 = await res2.json()
    const rawData3 = await res3.json()
    const rawData4 = await res4.json()
    const rawData5 = await res5.json()
    const rawData6 = await res6.json()

    return [rawData1, rawData2, rawData3, rawData4, rawData5, rawData6]
}