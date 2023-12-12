import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import components from "./components/Header"
import Home from './pages/Home';
import Tv from './pages/TV'
import Cel from './pages/Celebrity';
import Movie from './pages/Movies';
import NotFound from './pages/NotFound'
import MoviesContent from './pages/MoviesContent';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <components.Nav/>
        <Routes>
          <Route path="/" element={<Home.Home/>}/>
          <Route path="/Tv" element={<Tv.TvPage/>}/>
          <Route path="/Celebrity" element={<Cel.Celebrity/>}/>
          <Route path="/Movie" element={<Movie.MyMovie/>}/>
          <Route path="/Movie/:productId" element={<MoviesContent.MovieContent/>}></Route>
          <Route path={"*"} element={<NotFound.NotFound/>}/>
          <Route path="/Login" element={<LoginPage.LoginPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
