import React from 'react'
import {Typography,Box, Grid, Card, CardContent, CardMedia, CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import {selectSort} from '../store/SortSlice'
import {Link} from "react-router-dom";
import AddToFav from '../myList/AddToFav';


const useStyles = makeStyles((theme) => ({
    parent:{ 
        paddingTop: "4rem",
        marginTop:"1px"
    },
    image:{ 
        borderRadius: "1rem", 
        height: "500px",
        width:"100%",
        position:"relative",
    }, 
    card:{
        margin:"0 auto",
        width:"85%", 
        backgroundColor: "inherit",
    }, 
    rating:{ 
        position:"relative",
    },
    circleProgress:{ 
        backgroundColor:"white",
        borderRadius:"100%",
        position:"absolute",
        top:-40, 
    }, 
    voteRating:{ 
        color:"red",
        position:"absolute",
        top:-33, 
        left:6,
        fontWeight: "900",
    }, 
    description:{ 
        lineHeight:'20px', 
        maxHeight: '79px', 
        overFlow:"hidden", 
        textOverflow:"ellipsis",
        whiteSpace: "nowrap",
    },
  }));


const MainList = () => {

    const store = useSelector(selectSort)
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={2} className={classes.parent}>
                {store.allFilms.map(film => (
                    <Grid  id={film.id} item key={film.id} xs={12} sm={6} md={6} lg={4} xl={3}>
                        <Link to={`/film/${film.id}`}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    className={classes.image}
                                    image={film.poster_path?`https://image.tmdb.org/t/p/w300/${film.poster_path}`:"https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available.png"}
                                />
                                <CardContent> 
                                    <Box className={classes.rating}>
                                        <AddToFav film={film}/>
                                        <CircularProgress color="secondary" className={classes.circleProgress} variant="determinate" value={Number.parseInt(film.vote_average)*10} />
                                        <Typography className={classes.voteRating}>{film.vote_average*10+'%'}</Typography>
                                    </Box>
                                    <Typography style={{fontSize:"1rem",minHeight:"70px"}}><b>{film.title}</b></Typography>
                                    <Typography>{film.release_date?film.release_date:"unknown"}</Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default MainList