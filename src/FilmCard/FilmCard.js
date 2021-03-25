import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {selectFilm, setFilm} from '../store/FilmSlice';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Box, Card, CardContent, CardMedia, Typography, CircularProgress} from '@material-ui/core';
import AddToFav from '../myList/AddToFav'



const useStyles = makeStyles((theme)=> ({
    
    root:{ 
        minHeight:"100vh",
        display: "flex",
        [theme.breakpoints.down('xs')]: {
            display:"block",
          },
        [theme.breakpoints.down('sm')]: {
            display:"block",
          },
        },
        card:{ 
            paddingTop:"4rem",
        }, 
        image:{ 
            height:"600px",
            [theme.breakpoints.down('xs')]: {
                height: "auto",
            },
            [theme.breakpoints.down('sm')]: {
                height: "auto",
              },
        }, 
        circleProgress:{ 
            position:"absolute",
            left:"20px",
            top: "16px",
        }, 
        content:{ 
            textAlign: "center",
            padding:"2rem 0"
        }, 
        info:{ 
            display:"flex",
            flexWrap:"wrap",
            position:"relative",
            padding:"1rem",
            textAlign:"center",
            [theme.breakpoints.down('xs')]: {
                display:"block",
                textAlign:"left",

            },
            [theme.breakpoints.down('sm')]: {
                display:"block",
                textAlign:"left",

              },
        }, 
        infoPar:{
            display:"flex", 
            flexWrap:"nowrap",
            [theme.breakpoints.down('xs')]: {
                flexWrap:"wrap",
            },
            justifyContent:"center",
        },
        voteRating:{ 
            padding:"10px",
            fontWeight:"bold",
        }
}))

const FilmCard = () => {

    let { id } = useParams();
    const store = useSelector(selectFilm)
    const dispatch = useDispatch()
    const classes = useStyles()


    useEffect(()=>{     
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=48ea53c4545508f2da69cb2f3c339279`)
        .then(response=>response.json())
        .then(response=>{
            dispatch(setFilm(response))
        })
        .catch((e)=>{
            
        })
},[id, dispatch])
            
    return (
            <div  className={classes.root}>
                    
                    <Container className={classes.card} >
                    <Card>
                        <CardMedia
                                    component="img"
                                    className={classes.image}
                                    image={store.film.backdrop_path?`https://image.tmdb.org/t/p/original/${store.film.backdrop_path}`:"https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available.png"}
                                />
                        <CardContent >
                                    <Typography  className={classes.content} variant="h2">{store.film.title}</Typography>
                                    <Box className={classes.infoPar}>
                                        <Box>
                                            <img src={store.film.poster_path?`https://image.tmdb.org/t/p/w300/${store.film.poster_path}`:"https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available.png"} alt=""/>

                                        </Box>
                                        <Box className={classes.info}>
                                            <CircularProgress  fontSize="large" color="secondary" className={classes.circleProgress} variant="determinate" value={Number.parseInt(store.film.vote_average)*10} />
                                            <Typography  className={classes.voteRating}>{store.film.vote_average*10+'%'}</Typography>
                                            <Typography className={classes.voteRating}>User score</Typography>
                                            <Typography className={classes.voteRating}>Date of release: {store.film.release_date?store.film.release_date:"unknown"}</Typography>
                                            <Typography className={classes.voteRating}>Budget: {store.film.budget}$</Typography>
                                            <Box>
                                                <AddToFav film={store.film} data="cardIcon"/>
                                                <Typography variant="h3">Description:</Typography>
                                                <Typography variant="h4">{store.film.overview}</Typography>

                                            </Box> 

                                        </Box>
                                        
                                    </Box>
                                    
                        </CardContent>
                    </Card>
                    </Container>
            </div>
    )
}

export default FilmCard