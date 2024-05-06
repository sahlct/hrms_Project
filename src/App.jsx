import { Route, Routes} from "react-router-dom";
import About from "./components/aboutPage/about";
import Registration from "./components/RegPage/registration";
import Login from "./components/loginPage/login";
import Signup from "./components/signupPage/signUp";
import './App.css';
import Home from "./components/homePage/home";
import Container from "./components/landingPage/container";

function App() {
  return (
    <div className="App" style={{backgroundColor:'#f8fafb'}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Container />} />
      </Routes>
    </div>
  );
}

export default App;
