import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {selectSort,setAllPages,setAllFilms } from '../store/SortSlice'

import { makeStyles } from '@material-ui/core/styles';
import {Fab, Container,Box} from '@material-ui/core';
import MainList from './MainList';
import PaginationPopular from './PaginationHome';
import ScrollTop from '../header/ScrollTop'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SortingBy from './SortingBy';
import SelectGanre from './SelectGanre';
import SelectYear from './SelectYear';


const useStyles = makeStyles((theme)=> ({
    root:{ 
        backgroundColor: "beige",
        display: "flex",
        minHeight: "100vh",
        [theme.breakpoints.down('xs')]: {
            display:"block",
          },
        [theme.breakpoints.down('sm')]: {
            display:"block",
          },
    }, 
    sidebar:{ 
        padding:"2rem 0 0 1rem",
        width:"25%",
        [theme.breakpoints.down('sm')]: {
            width:"96%",
            
          },
    },
    filters:{ 
        display: "flex",
        justifyContent:"space-between",
        [theme.breakpoints.down('xs')]: {
            display:"block",
            alignItems:"center",
            justifyContent:"center",
          },
        [theme.breakpoints.down('sm')]: {
            display:"block",
            alignItems:"center",
            justifyContent:"center",
          },
    }
}))

const Main = (props) => {

    const store = useSelector(selectSort)
    const dispatch = useDispatch()
    const classes = useStyles()
    

    useEffect(()=>{     
            fetch(`http://api.themoviedb.org/3/discover/movie?page=${store.currentPage}${store.sortering}${store.genres}${store.years}&api_key=48ea53c4545508f2da69cb2f3c339279`)
            .then(response=>response.json())
            .then(response=>{
                dispatch(setAllPages(response.total_pages))
                if(response.results){
                    dispatch(setAllFilms(response.results))
                }
            })
            .catch((e)=>{
                
            })
    },[store.currentPage, store.sortering, store.genres, store.years,dispatch])


    return (
          <div className={classes.root}>
            <Box className={classes.sidebar}>
                <SortingBy/>
                <SelectYear/>
                <SelectGanre />
            </Box>
            <Container maxWidth='lg' >
                <Box className={classes.filters}>
                    <PaginationPopular />
                    {/* <SearchFilms setSearch={setSearch} setFilteringBy={setFilteringBy} setGanres={setGanres} setYears={setYears} setSortering={setSortering}/> */}
                </Box>
                <MainList/>
                <ScrollTop {...props}>
                    <Fab color="secondary" size="large" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </Container>
        </div> 
    )
}

export default Main