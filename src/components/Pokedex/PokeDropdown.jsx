import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokeDropdown = (props) => {
    const [calledAPI, setCalledAPI] = useState()

    //     useEffect(() => {
    //     // runs twice bc <React.StrictMode> in index.js, can remove if you want
    //     // rendering twice to check for errors
    //     // makes call when page runs
    //     getPokemonAPI();
    // }, [])

    const getPokemonAPI = (e) => {
        e.preventDefault()
        // only needs the first call on load
        if (calledAPI) {
            return
        }
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=905')
            .then(res => {
                const { results } = res.data
                console.log(results)
                props.fetchPokemon(results)
            })
            .catch(err => console.log(err))
        setCalledAPI(true)
    }

    return (
        <>
            <form onSubmit={getPokemonAPI} className="w-450 mx-auto mt-20 form-inline d-flex justify-content-center align-items-center">
                <label className='font-size-20 mr-20'>Select a generation:</label>
                <select onChange={(e) => props.currentGen(e.target.value)} className='form-control'>
                    <option value='0'>All</option>
                    <option value='1'>Gen 1</option>
                    <option value='2'>Gen 2</option>
                    <option value='3'>Gen 3</option>
                    <option value='4'>Gen 4</option>
                    <option value='5'>Gen 5</option>
                    <option value='6'>Gen 6</option>
                    <option value='7'>Gen 7</option>
                    <option value='8'>Gen 8</option>
                </select>
                <div className="d-flex align-items-center justify-content-center">
                    <input type="submit" className="btn btn-primary" value="Show Pokemon" />
                </div>
            </form>
        </>
    )
}

export default PokeDropdown

// useEffect(() => {
//     // runs twice bc <React.StrictMode> in index.js, can remove if you want
//     // rendering twice to check for errors
//     console.log('USE EFFECT HOOK')
//     // makes call when page runs
//     getPokemonAPI();
// }, [])