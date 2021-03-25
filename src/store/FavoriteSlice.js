import {createSlice} from '@reduxjs/toolkit'

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {
                            films:[],
                            checked: {}, 
                        }

export const FavoriteSlice = createSlice({
    name: 'favorite',
    initialState: persistedState, 
    reducers : { 
        setFilms:(state,data)=>{
            state.films = [...state.films,data.payload]
        },
        deleteFilm:(state,data)=>{
            delete state.films[data.payload]
        },
        setChecked:(state,data)=>{
            state.checked[data.payload.key] = data.payload.checked
        },
    }
})

export const {setFilms, setChecked, deleteFilm} = FavoriteSlice.actions
export const selectFav = state => state.favorite;
export default FavoriteSlice.reducer;
