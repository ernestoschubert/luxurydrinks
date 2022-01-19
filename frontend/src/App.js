import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./pages/Nosotros";
import Cocktails from "./pages/Cocktails";
import NuestrosGins from "./pages/NuestrosGins";
import { withRouter } from "./utils/withRouter";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/LogIn";
import GinNoProps from "./pages/Gin";
import Legales from "./pages/ConsumoResponsable";
import PanelAdmin from "./components/panelAdmin";
import PanelUser from "./components/PanelUser";
import authActions from "./redux/actions/authActions";
import { connect } from "react-redux";
import DataProvider from "./DataProvider";
import Coctel from "./components/Coctel";
import Cart from "./components/Cart";

const Gin = withRouter(GinNoProps);

function App(props) {
  useEffect(() => {
    const { authUser } = props;
    if (localStorage.getItem("token")) {
      authUser(localStorage.getItem("token"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Navbar />
          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Cocktails" element={<Cocktails />} />
            <Route path="/NuestrosGins" element={<NuestrosGins />} />
            <Route path="/Legales" element={<Legales />} />
            <Route path="/Gin/:id" element={<Gin />} />
            <Route path="/Cocktail/:id" element={<Coctel />} />
            <Route path="/PanelUser" element={<PanelUser />} />
            {!props.user && <Route path="/Registrarse" element={<SignUp />} />}
            {!props.user && <Route path="/Loguearse" element={<Login />} />}
            {props.role === "admin" && (
              <Route path="/panelAdmin" element={<PanelAdmin />} />
            )}
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.authReducers.token,
    user: state.authReducers.user,
    role: state.authReducers.role,
  };
};
const mapDispatchToProps = {
  authUser: authActions.authUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
