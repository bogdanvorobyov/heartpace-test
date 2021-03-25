import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './header/Header'
import Main from './home/Main'
import SearchPage from './search/SearchPage'
import Favorite from './myList/Favorite'
import {useSelector} from 'react-redux';
import {selectSearch} from './store/SearchSlice'
import {selectFav} from './store/FavoriteSlice'
import FilmCard from './FilmCard/FilmCard'


function App() {
  
  const store = useSelector(selectSearch)
  const storeFav = useSelector(selectFav)
  localStorage.setItem('reduxState', JSON.stringify(storeFav)) 



  return (
    <div>
      <Router>
          <Header/> 
          <Switch>
              {store.isSearching&&<Route exact path='/' component={SearchPage} ></Route>}
              {!store.isSearching&&<Route exact path='/' component={Main} ></Route>}
              <Route path='/mylist' component={Favorite}></Route>
              <Route path="/film/:id" children={<FilmCard/>} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
