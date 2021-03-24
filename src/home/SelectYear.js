import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {setYears} from '../store/SortSlice'
import { makeStyles } from '@material-ui/core/styles';
import {Slider,Switch,FormControlLabel} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
      },
  }));

const SelectYear = () => {
    const dispatch = useDispatch()
    const [disable, setDisable] = useState(true);
    const classes = useStyles();
   
    const selectValue = (value) => {
        if(disable){
            dispatch(setYears(''))
        }
        else{ 
            dispatch(setYears(`&year=${value}`))

        }
    };

    const clickHandler =(event)=>{
        setDisable(!event.target.checked)
        if(!event.target.checked){ 
            dispatch(setYears(''))
            // props.setFilteringBy('discover/')
        }
    }

    return (
        <div className={classes.root}>
            <FormControlLabel
                control={<Switch
                    onChange={clickHandler}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />}
                label="Select year of release"
            />
            <Slider
                disabled={disable}
                defaultValue={2020}
                getAriaValueText={selectValue}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1970}
                max={2021}
            />
        </div>
    )
}

export default SelectYear