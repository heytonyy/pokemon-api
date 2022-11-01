import React, { useState } from 'react'
import Logo from './Logo'
import PokeTable from './PokeTable'
import PokeDropdown from './PokeDropdown'
import PokeDisplay from './PokeDisplay'
import bg from '../../assets/poke-bg.png'

const bgStyle = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
};

const Pokedex = () => {
    const [pokemon, setPokemon] = useState([])
    const [currentGen, setCurrentGen] = useState('0')
    const [currentPokemon, setCurrentPokemon] = useState('')

    const fetchPokemon = (pokeList) => {
        setPokemon([pokeList])
    }
    const genHandler = (gen) => {
        setCurrentGen(gen)
    }
    const pokemonHandler = (poke) => {
        setCurrentPokemon(poke)
    }


    return (
        <>
            <div style={bgStyle}>
                <Logo />
                <PokeDropdown fetchPokemon={fetchPokemon} currentGen={genHandler} />
                <div className="d-flex rubik-font mt-20 justify-content-center">
                    <PokeTable pokemon={pokemon} currentGen={currentGen} currentPokemon={pokemonHandler} />
                    <PokeDisplay pokemon={currentPokemon} />
                </div>
            </div>
        </>
    )
}

export default Pokedex