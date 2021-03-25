import React from 'react'
import {Grid, TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch, useSelector} from 'react-redux';
import {setIsSearching, setSearchField, setPlaceHolder, selectSearch} from '../store/SearchSlice'



const SearchFilms = () => {
    const dispatch = useDispatch()
    const store = useSelector(selectSearch)

    const searchHandler=(event)=>{
        if(event.target.value===''){ 
            dispatch(setIsSearching(false))
            dispatch(setPlaceHolder(event.target.value))
            dispatch(setSearchField(event.target.value))
        }
        else{
            dispatch(setIsSearching(true))
            dispatch(setPlaceHolder(event.target.value))
            dispatch(setSearchField(`&query=${event.target.value}`))
        }
    }

    return (
            <Grid container spacing={1} alignItems="flex-end" justify="center" >
                <Grid item >
                    <SearchIcon />
                </Grid>
                <Grid item>
                    <TextField  value={store.placeHolder} id="input-with-icon-grid" onChange={searchHandler}  size="medium" label="Search for films..." />
                </Grid>
            </Grid>
    )
}

export default SearchFilms