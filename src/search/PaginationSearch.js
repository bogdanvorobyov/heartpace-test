import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux';
import {selectSearch, setCurrentPage} from '../store/SearchSlice'


const useStyles = makeStyles(() => ({
    root: {
        paddingTop:"3rem",
    },
    ulPag:{ 
        justifyContent:"center",
    }
  }));



const PaginationPopular = () => {
    const dispatch = useDispatch()
    const store = useSelector(selectSearch)
    const classes = useStyles();

    const handleChange = (e, value) =>{ 
        dispatch(setCurrentPage(value))
    }

    return (
            <div className ={classes.root}>
                <Pagination  color="primary" count={store.allPages} page={store.currentPage} onChange={handleChange} />
            </div>
    )
}

export default PaginationPopular