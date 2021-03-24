import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {setSortering} from '../store/SortSlice'
import { makeStyles } from '@material-ui/core/styles';
import {InputLabel, MenuItem, Select, FormControl} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));


const SortingBy = () => {

    const dispatch = useDispatch()
    const classes = useStyles();
    const [valueInput, setValueInput] = useState("popularity.desc")

    const handleChange = (event) => {
        setValueInput(event.target.value)  
        dispatch(setSortering(`&sort_by=${event.target.value}`));
    };


    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="select-label">Sort by</InputLabel>
                <Select
                labelId="select-label"
                value={valueInput}
                onChange={handleChange}
                >
                    <MenuItem value={"popularity.desc"}>Popularity descending</MenuItem>
                    <MenuItem value={"popularity.asc"}>Popularity ascending</MenuItem>
                    <MenuItem value={"revenue.desc"}>Revenue descending</MenuItem>
                    <MenuItem value={"revenue.asc"}>Revenue ascending</MenuItem>
                    <MenuItem value={"vote_count.desc"}>Vote amount descending</MenuItem>
                    <MenuItem value={"vote_count.asc"}>Vote amount ascending</MenuItem>
                </Select>       
            </FormControl>
        </div>
    )
}

export default SortingBy