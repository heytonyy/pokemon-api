import React from 'react'
import axios from 'axios'

// thanks stacks overflow!
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase(); });
}
const genDict = {
    0: [0, 905],
    1: [0, 150],
    2: [151, 250],
    3: [251, 385],
    4: [386, 492],
    5: [493, 648],
    6: [649, 720],
    7: [721, 808],
    8: [809, 905]
}

const PokeDisplay = (props) => {
    const { pokemon, currentGen } = props
    const fetchPokemonInfo = (name) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                console.log(res.data)
                props.currentPokemon(res.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <table className="table rounded bg-secondary w-200 mt-20 mr-20 table-hover">
                <thead>
                    <tr>
                        <th className='text-center'>POKE#</th>
                        <th className='text-center'>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pokemon.length > 0 && (pokemon[0].filter((p, idx) => {
                            // filter base on generation, use the dictionary for ranges
                            return (idx >= genDict[currentGen][0] && idx <= genDict[currentGen][1])
                        }).map((p, idx) => {
                            // map the pokemon to the table
                            return (
                                <tr onClick={() => fetchPokemonInfo(p.name)} key={idx}>
                                    <td className='text-center'>{idx + 1}</td>
                                    <td>
                                        <p className='text-center'>{p.name.toProperCase()}</p>
                                    </td>
                                    <td className='font-size-20 pr-20'>➜</td>
                                </tr>
                            )
                        })
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default PokeDisplay