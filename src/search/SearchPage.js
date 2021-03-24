import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {selectSearch,setAllPages,setSearchFilms } from '../store/SearchSlice'

import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PaginationSearch from './PaginationSearch';
import {Fab, Container} from '@material-ui/core';
import ScrollTop from '../header/ScrollTop'
import SearchList from './SearchList'




const useStyles = makeStyles((theme)=> ({
    root:{ 
        backgroundColor: "beige",
        minHeight: "100vh",
    }, 
}))

const SearchPage = (props) => {
    const store = useSelector(selectSearch)
    const dispatch = useDispatch()


    useEffect(()=>{     
        fetch(`http://api.themoviedb.org/3/search/movie?page=${store.currentPage}${store.searchField}&api_key=48ea53c4545508f2da69cb2f3c339279`)
        .then(response=>response.json())
        .then(response=>{
            dispatch(setAllPages(response.total_pages))
            if(response.results){
                dispatch(setSearchFilms(response.results))
            }
        })
        .catch((e)=>{
            
        })

},[store.currentPage, store.searchField,dispatch])

    const classes = useStyles()

    return (
        <div className={classes.root}>
             <Container maxWidth='lg' >
                <PaginationSearch/>
                <SearchList/>
                <ScrollTop {...props}>
                    <Fab color="secondary" size="large" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
             </Container>
        </div>
    )
}

export default SearchPage