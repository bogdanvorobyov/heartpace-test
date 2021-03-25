import {createSlice} from '@reduxjs/toolkit'

export const FavoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        films:[],
        checked: {}, 
        color: 'classes.favoriteWhite', 
     }, 
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
