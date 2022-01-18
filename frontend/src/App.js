import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
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
import PanelAdmin from "./components/panelAdmin";
import authActions from "./redux/actions/authActions";
import Cart from './components/Cart'
import {connect} from 'react-redux'
import DataProvider from "./DataProvider";

const Gin = withRouter(GinNoProps)


function App(props) {

  useEffect(()=>{
    const { authUser} = props
    if(localStorage.getItem('token')){
      authUser(localStorage.getItem('token'))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Navbar />
          <Cart />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Nosotros" element={<Nosotros/>} />
            <Route path="/Cocktails" element={<Cocktails/>} />
            <Route path="/NuestrosGins" element={<NuestrosGins/>}/>
            <Route path="/Gin/:id" element={<Gin/>}/>
            <Route path="/Registrarse" element={<SignUp/>}/>
            <Route path="/Loguearse" element={<Login/>}/>
            <Route path="/panelAdmin" element={<PanelAdmin />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

const mapStateToProps = (state) => {
  return{
    token: state.authReducers.token,
  }
}
const mapDispatchToProps = {
  authUser: authActions.authUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
