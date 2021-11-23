import {Route, Routes } from 'react-router-dom';
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
    <MainNavigation/>
    <Routes>
      <Route exact={true} path='/'>
        <AllMeetupsPage/>
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage/>
      </Route>
      <Route path='/favorites'>
        <FavoritesPage/>
      </Route>
    </Routes>
    </div> 
  );
}

export default App;
