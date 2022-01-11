import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from './pages/Nosotros'
import Cocktails from './pages/Cocktails'
import NuestrosGins from './pages/NuestrosGins'
import { withRouter } from "./utils/withRouter";
import Footer from './components/Footer'
import SignUp from './pages/SignUp';
import Login from "./pages/LogIn";
import GinNoProps from "./pages/Gin";

const Gin = withRouter(GinNoProps)

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Nosotros" element={<Nosotros/>} />
          <Route path="/Cocktails" element={<Cocktails/>} />
          <Route path="/NuestrosGins" element={<NuestrosGins/>}/>
          <Route path="/Gin/:id" element={<Gin/>}/>
          <Route path="/Registrarse" element={<SignUp/>}/>
          <Route path="/Loguearse" element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
