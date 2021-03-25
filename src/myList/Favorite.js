import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Fab, Container} from '@material-ui/core';
import ScrollTop from '../header/ScrollTop'
import FavList from './FavList'


const useStyles = makeStyles((theme)=> ({
    root:{ 
        backgroundColor: "beige",
        minHeight: "100vh",
    }, 
}))


const Favorite = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
             <Container maxWidth='lg' >
                <FavList/>
                <ScrollTop {...props}>
                    <Fab color="secondary" size="large" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
             </Container>
        </div>
    )
}

export default Favorite