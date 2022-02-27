import React from 'react'
import '../Styles/PokemonesList.css'
import useStore from '../Store/index'

const PokemonListNav = () => {
  const {user_global, CloseSession, ShowFavoritesList,}=useStore();
  return (
    <nav className='PokemonListNav flex-between'>
        <span className='user'>User : {user_global.name}</span>
        <div className="buttons_nabvar flex-between">
            <span className='btn_nabvar' onClick={()=>ShowFavoritesList()}>Favoritos</span>
            <span className='btn_nabvar' onClick={()=>CloseSession()}>Sing Up</span>
        </div>
    </nav>
  )
}

export default PokemonListNav