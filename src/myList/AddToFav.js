import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useSelector, useDispatch} from 'react-redux';
import {selectFav,setFilms, setChecked, deleteFilm } from '../store/FavoriteSlice'


const useStyles = makeStyles((theme) => ({
    favoriteWhite:{ 
        position:"absolute",
        top:-50,
        left: 280,
        color:"white",
    },
    favoriteRed:{ 
        position:"absolute",
        top:-50,
        left: 280,
        color:"red",
    },
    cardIcon:{
        top: 20,
        left: -50,
    }
}))

const AddToFav = (props) => {
    const classes = useStyles();
    const store = useSelector(selectFav)
    const dispatch = useDispatch()
    const id = props.film.id;

    useEffect(()=>{
        for(let key in store.checked){
            if(key ===id){ 
                dispatch(setChecked({key: id, checked:true }))
            }
        }
    }, [store, id, dispatch])
     
   

    const clickHandler =(event)=>{
        event.preventDefault();
        let count = 0
        for(let i=0; i<store.films.length; i++){
            if(!store.films[i]){ 
            }
            else if(store.films[i].id ===id){ 
                count++
                dispatch(deleteFilm(i))
            }
        }
        if (count===0){ 
            dispatch(setFilms(props.film))
        }
        if(!store.checked[id]){
            dispatch(setChecked({key:id, checked:true}))
        }
        else{ 
            dispatch(setChecked({key:id, checked:false}))
        }
    }
    return (
        <div>
            {!store.checked[id] &&<FavoriteIcon data-key={id} onClick={clickHandler} fontSize="large" className={classes.favoriteWhite + ' '+ classes[props.data]}/>}
            {store.checked[id] &&<FavoriteIcon data-key={id} onClick={clickHandler} fontSize="large" className={classes.favoriteRed + ' '+ classes[props.data]}/>}
        </div>
    )
}

export default AddToFav