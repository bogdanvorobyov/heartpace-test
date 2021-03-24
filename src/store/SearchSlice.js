import {createSlice} from '@reduxjs/toolkit'

export const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        isSearching: false, 
        searchFilms:[], 
        searchField: '', 
        placeHolder: '',
        currentPage: 1, 
        allPages:10, 
     }, 
    reducers : { 
        setIsSearching:(state,data)=>{
            state.isSearching = data.payload
        },
        setSearchField:(state,data)=>{
            state.searchField = data.payload
        },
        setPlaceHolder:(state,data)=>{
            state.placeHolder = data.payload
        },
        setSearchFilms:(state,data)=>{
            state.searchFilms = data.payload
        },
        setCurrentPage:(state,data)=>{
            state.currentPage = data.payload
        },
        setAllPages:(state,data)=>{
            state.allPages = data.payload
        },
    }
})

export const {setIsSearching, setSearchField, setPlaceHolder, setSearchFilms, setCurrentPage, setAllPages} = SearchSlice.actions
export const selectSearch = state => state.search;
export default SearchSlice.reducer;
