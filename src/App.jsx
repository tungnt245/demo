import './App.scss';
import * as ReactDOM from "react-dom";
import LoginPage from "./components/Loginpage";
import { Routes, Route, Link } from "react-router-dom";
import LoginBit from './components/LoginBit';
import Acount from "./components/Acount";
import ForgotPassword from './components/ForgotPassword';
import ForgetPassword from './components/ForgetPassword';
import Topic from './components/Topic';
import Menu from './components/Menu';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Library from "./components/Library";
import Parem from "./components/Parem";
import Player from "./components/Player";
import Doc from "./components/Doc";




function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element = {<LoginPage/>}/>
         <Route path='/login' element = {<LoginBit/>}/>
         <Route path='/acount' element = {<Acount/>}/>
         <Route path='/forgot' element = {<ForgotPassword/>}/>
         <Route path='/forget' element = {< ForgetPassword/>}/>
         <Route path='/topic' element = {<Topic/>}/>
         <Route path='/menu' element = {<Menu/>}/>
         <Route path ="library" element={<Library/>}/>
         <Route path ="parem" element={<Parem/>}/>
         <Route path ="player" element={<Player/>}/>
         <Route path ="doc" element={<Doc/>}/>


       </Routes>
    </div>
  );
}

export default App;
