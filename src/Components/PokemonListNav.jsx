import React from 'react'
import '../Styles/PokemonesList.css'
import useStore from '../Store/index'

const PokemonListNav = () => {
  const {user_global, CloseSession, ShowFavoritesList,}=useStore();
  return (
    <nav className='navbarPokemon flex-between'>
        <span className='navbar__user'>User : {user_global.name}</span>
        <div className="buttons flex-between">
            <span className='button__navbar' onClick={()=>ShowFavoritesList()}>Favoritos</span>
            <span className='button__navbar' onClick={()=>CloseSession()}>Sing Up</span>
        </div>
    </nav>
  )
}

export default PokemonListNav