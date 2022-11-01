import React from 'react'
import TypeColor from './TypeColor'

// thanks stacks overflow!
String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase(); });
}

const typeColors = {
  'normal': '#a8a878',
  'fighting': '#c03128',
  'flying': '#a790f0',
  'poison': '#a040a0',
  'ground': '#e0c068',
  'rock': '#b7a039',
  'bug': '#a8b820',
  'ghost': '#705898',
  'steel': '#b8b8d0',
  'fire': '#ef8030',
  'water': '#6890f0',
  'grass': '#78c84f',
  'electric': '#f9d030',
  'psychic': '#f85888',
  'ice': '#98d8d8',
  'dragon': '#7038f8',
  'dark': '#6f5848',
  'fairy': '#ee99ac',
  'unknown': '#69a08f',
  'shadow': '#21130d',
}

const PokeDisplay = (props) => {
  const { pokemon } = props

  return (
    <>
      <div className="w-500">
        {
          (pokemon === '') ?
            <h3>Click a pokemon to get more details...</h3> :
            (
              <div className='card bg-secondary'>
                {/* NAME */}
                <h3 className='text-center'>{pokemon.forms[0].name.toProperCase()}</h3>
                <div className="d-flex justify-content-center">
                  {/* LEFT COL - DEFAULT SPRITE */}
                  <div className='col'>
                    <h5 className='text-center mt-0 mb-0'>Default Sprite</h5>
                    <div className='d-flex justify-content-center'>
                      <img src={pokemon.sprites.front_default} alt={`${pokemon.forms[0].name}`} />
                      <img src={pokemon.sprites.back_default} alt={`${pokemon.forms[0].name}`} />
                    </div>
                  </div>
                  {/* RIGHT COL - SHINY SPRITE */}
                  <div className='col'>
                    <h5 className='text-center mt-0 mb-0'>Shiny Sprite</h5>
                    <div className='d-flex justify-content-center'>
                      <img src={pokemon.sprites.front_shiny} alt={`${pokemon.forms[0].name}`} />
                      <img src={pokemon.sprites.back_shiny} alt={`${pokemon.forms[0].name}`} />
                    </div>
                  </div>
                </div>
                {/* STATS & TYPE/ABILITIES */}
                <div className="d-flex">
                  <div className='text-left mr-20'>
                    <h4><span className='text-decoration-underline'>Stats</span>:</h4>
                    <ul>
                      {
                        pokemon.stats.map((p, idx) => {
                          return (
                            <li key={idx}> <strong className='mr-5'>{p.stat.name.toUpperCase()}:</strong> {p.base_stat}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  <div className='ml-20'>
                    {
                      pokemon.types.length > 1 ?
                        <>
                          <h5><span className='text-decoration-underline'>Type 1</span>:
                            <TypeColor color={typeColors[pokemon.types[0].type.name]}>
                              {' ' + pokemon.types[0].type.name.toProperCase()}
                            </TypeColor>
                          </h5>
                          <h5><span className='text-decoration-underline'>Type 2</span>:
                            <TypeColor color={typeColors[pokemon.types[1].type.name]}>
                              {' ' + pokemon.types[1].type.name.toProperCase()}
                            </TypeColor>
                          </h5>
                        </> :
                        <h5><span className='text-decoration-underline'>Type</span>:
                          <TypeColor color={typeColors[pokemon.types[0].type.name]}>
                            {' ' + pokemon.types[0].type.name.toProperCase()}
                          </TypeColor>
                        </h5>
                    }
                    <h5><span className='text-decoration-underline'>Weight</span>: {pokemon.weight}</h5>
                    <h5><span className='text-decoration-underline'>Abilities</span>:</h5>
                    {
                      pokemon.map((p,idx) => {
                        return (
                          <li>{p.abilities[0]}</li>
                        )
                      })
                    }
                  </div>
                </div>
                {/* MOVES */}
                <div className='text-left'>
                  <h4><span className='text-decoration-underline'>Moves</span>:</h4>
                  <ul>
                    {
                      pokemon.moves.map((p, idx) => {
                        return (
                          <li key={idx}>{p.move.name.toProperCase()}</li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            )
        }
      </div>
    </>
  )
}

export default PokeDisplay