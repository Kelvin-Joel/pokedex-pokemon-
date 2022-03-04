import create from 'zustand'

const useStore = create((set, get) => ({
    List_Users: JSON.parse(localStorage.getItem('users')) === null ? [] : JSON.parse(localStorage.getItem('users')),
    error: '',
    FormLogin_status: true, //estado de formularios, para mostrar y ocultar :S
    user_global: '',//para capturar datos del usuario logiado :S
    pokemon_list_status: false,//estado para mostrar y ocultar listado de pokemones!
    OpenListFavorites: false,//estado para abrir y cerrar ventana de listado de pokemones favoritos
    data_fetch: [],//capturamos datos de la api :S
    pokemonFiltrados: '',
    SaveUsers() {
        // const ListDataUser = List_Users
        localStorage.setItem('users', JSON.stringify(get().List_Users))
    },

    Change_FormLogin_State() {
        set({ FormLogin_status: !get().FormLogin_status })
    },
    change_state_FormRegister() {
        set({ state_formLogin: true })
    },
    AddUser(dataUser) {
        const newUser = [...get().List_Users, dataUser]
        set({ List_Users: newUser })
        get().SaveUsers()

    },
    InitialSession(text) {
        let get_user = get().List_Users.find(user => user.name === text.name && user.paswoord === text.paswoord)
        if (get_user !== undefined) {
            set({ user_global: get_user })

            return
        }
        set({ error: 'usuario no encontrado pe!' })
        alert(get().error)
    },

    CloseSession() {
        set({ user_global: undefined, pokemon_list_status: false, data_fetch: [] })
    },

    ChangePokemonListStatus() {/*Cambiar Estado de contenedor de lista de pokemones :S*/
        set({ pokemon_list_status: !get().pokemon_list_status })
    },
    Close_List_Pokemones() {
        set({ pokemon_list_status: false })
    },
    ShowFavoritesList() {
        set({ OpenListFavorites: !get().OpenListFavorites })
    },

    AddPokemonFavorite(data_pokemon) {
        const getUser = get().List_Users.find(user => user.id === get().user_global.id)
        const isFavorito = getUser.listFavoritos.find(pokemon => pokemon.id === data_pokemon.id) !== undefined
        console.log(data_pokemon)
        if (isFavorito) {
            alert('ya esta agregado!')
            return
        }
        getUser.listFavoritos = [...getUser.listFavoritos, data_pokemon]
        get().SaveUsers();
    },

    DeletePokemonFavorito(PokemonData) {

        const userData = get().user_global
        const FilterPokemon = userData.listFavoritos.filter(pokemon => pokemon.id !== PokemonData.id)
        set({ pokemonFiltrados: FilterPokemon })
        console.log(FilterPokemon)
        get().SaveUsers();
    },

    FecthPokemon() {
        for (let index = 1; index <= 10; index++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${index}`;

            fetch(url)
                .then(response => response.json())
                .then(result => {
                    set({ data_fetch: [...get().data_fetch, result] })
                })
        }
    }

}))

export default useStore