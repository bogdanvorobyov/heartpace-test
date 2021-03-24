import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux';
import {setGenres} from '../store/SortSlice'
import { makeStyles } from '@material-ui/core/styles';
import {FormLabel, FormControl,FormGroup,FormControlLabel, Checkbox} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    genres: {
      display: 'flex',
      flexWrap:'wrap',
      flexDirection:'row',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));

const SelectGanre = () => {
    const dispatch = useDispatch()
    const classes = useStyles();

    const [state, setState] = useState({
        28: false,
        12: false,
        16: false,
        35: false,
        80: false,
        99: false,
        18: false,
        10751: false,
        14: false,
        36: false,
        27: false,
        10402: false,
        9648: false,
        10749: false,
        878: false,
        10770: false,
        53: false,
        10752: false,
        37: false,
    });

    useEffect(()=>{
        let queryGanres =[];
        for(let key in state){
            if(state[key]===true){ 
                queryGanres.push(key)
            }
        }
        if(queryGanres.length===0){ 
            dispatch(setGenres(''))
        }
        else{ 
            dispatch(setGenres(`&with_genres=${queryGanres.join(',')}`))
        }
    },[state,dispatch])

    const handleChange = (event) => {
            setState({ ...state, [event.target.name]: event.target.checked })
    };

  const {action,adventure, animation} = state;
    return (
        <div>
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Check genres</FormLabel>
            <FormGroup className={classes.genres}>
            <FormControlLabel
                control={<Checkbox checked={action} onChange={handleChange} name="28" />}
                label="Action"
            />
            <FormControlLabel
                control={<Checkbox checked={adventure} onChange={handleChange} name="12" />}
                label="Adventure"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="16" />}
                label="Animation"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="35" />}
                label="Comedy"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="80"/>}
                label="Crime"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="99"/>}
                label="Documentary"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="18"/>}
                label="Drama"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="10751"/>}
                label="Family"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="14"/>}
                label="Fantasy"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="36"/>}
                label="History"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="27"/>}
                label="Horror"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="10402"/>}
                label="Music"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="9648"/>}
                label="Mystery"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="10749"/>}
                label="Romance"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="878"/>}
                label="Science fiction"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="10770"/>}
                label="TV movie"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="53"/>}
                label="Thriller"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="10752"/>}
                label="War"
            />
            <FormControlLabel
                control={<Checkbox checked={animation} onChange={handleChange} name="37"/>}
                label="Western"
            />
            </FormGroup>
        </FormControl>
        </div>
    )
}

export default SelectGanre