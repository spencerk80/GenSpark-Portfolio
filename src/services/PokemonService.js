import Pokemon from '../models/Pokemon'
// import testData from '../testdata'

export default async function getPokemon() {
    const rawData = await getPokemonData()
    const team = []

    //Type2 may not exist. Most pokemon don't have a secondary typing. Hence the ternaries
    rawData.forEach(rawPokemonData => {
        let pokemon = new Pokemon()
        let type1 = rawPokemonData.types[0].type.name
        let type2 = rawPokemonData.types[1] ? rawPokemonData.types[1].type.name : ''

        //Capitalize the first letter of the types
        type1 = type1[0].toUpperCase() + type1.slice(1)
        if(type2) type2 = type2[0].toUpperCase() + type2.slice(1)

        pokemon.id          = rawPokemonData.id
        pokemon.name        = rawPokemonData.name[0].toUpperCase() + rawPokemonData.name.slice(1)
        pokemon.frontImg    = rawPokemonData.sprites.front_default
        pokemon.shinyImg    = rawPokemonData.sprites.front_shiny
        pokemon.type        = `${type1} ${type2 && ` / ${type2}`}`
        team.push(pokemon)
    })

    return team

}


async function getPokemonData() {
    
    let promises = []
    let allPromises = null
    let team = []

    //Start 6 fetch requests
    for(let i = 0; i < 6; i++) 
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 720) + 1}`))
    
    //Await all fetches to return and push the data into teams array
    allPromises = await Promise.all(promises)
    for(let promise of allPromises) team.push(promise.json())

    //Return the data after all data is available
    return Promise.all(team)
}