import {createSlice} from '@reduxjs/toolkit'

export const FilmSlice = createSlice({
    name: 'film',
    initialState: {
        film:{}, 
     }, 
    reducers : { 
        setFilm:(state,data)=>{
            state.film = data.payload
        },
        // setVideo:(state,data)=>{
        //     state.video = data.payload
        // },
        // setActors:(state,data)=>{
        //     state.actors = data.payload
        // },
        // setRating:(state,data)=>{
        //     state.searchFilms = data.payload
        // },
       
    }
})

export const {setFilm} = FilmSlice.actions
export const selectFilm = state => state.film;
export default FilmSlice.reducer;
