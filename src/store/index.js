import {configureStore} from '@reduxjs/toolkit'

import SortReducer from './SortSlice'
import SearchReducer from './SearchSlice'
import FilmReducer from './FilmSlice'

export default configureStore( { 
    reducer: { 
        sort: SortReducer,
        search: SearchReducer,
        film: FilmReducer,
    }
})