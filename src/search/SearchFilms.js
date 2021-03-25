import React from 'react'
import {Grid, TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch} from 'react-redux';
import {setIsSearching, setSearchField} from '../store/SearchSlice'



const SearchFilms = () => {
    const dispatch = useDispatch()

    const searchHandler=(event)=>{
        if(event.target.value===''){ 
            console.log('empty')
            dispatch(setIsSearching(false))
            dispatch(setSearchField(event.target.value))
        }
        else{
            dispatch(setIsSearching(true))
            dispatch(setSearchField(`&query=${event.target.value}`))
        }
    }

    return (
            <Grid container spacing={1} alignItems="flex-end" justify="center" >
                <Grid item >
                    <SearchIcon />
                </Grid>
                <Grid item>
                    <TextField  id="input-with-icon-grid" onChange={searchHandler}  size="medium" label="Search for films..." />
                </Grid>
            </Grid>
    )
}

export default SearchFilms