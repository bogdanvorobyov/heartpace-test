import {createSlice} from '@reduxjs/toolkit'

export const SortSlice = createSlice({
    name: 'sort',
    initialState: {
        currentPage:1,
        allPages:10, 
        allFilms: [], 
        sortering: '',
        genres: '', 
        years: '',
     }, 
    reducers : { 
        setCurrentPage: (state,data)=>{
            state.currentPage = data.payload
        }, 
        setAllPages: (state,data)=>{
            state.allPages = data.payload
        }, 
        setAllFilms: (state,data)=>{
            state.allFilms = data.payload
        }, 
        setSortering:(state,data)=>{
            state.sortering = data.payload
        }, 
        setGenres:(state,data)=>{
            state.genres = data.payload
        }, 
        setYears:(state,data)=>{
            state.years = data.payload
        }
        
    }
})

export const {setCurrentPage,setAllPages, setAllFilms, setSortering, setGenres, setYears} = SortSlice.actions
export const selectSort = state => state.sort;
export default SortSlice.reducer;
