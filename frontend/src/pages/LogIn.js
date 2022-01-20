import React, { useRef } from "react";
import "../styles/login.css";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import usersActions from "../redux/actions/authActions";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const LogIn = () => {
  const Alert = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    background: "black",
    color: "white",
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef();
  const password = useRef();

  const loguearse = async (e) => {
    e.preventDefault();
    if (email.current.value !== "" && password.current.value !== "") {
      try {
        const respuesta = await dispatch(
          usersActions.signInUser({
            email: email.current.value,
            password: password.current.value,
          })
        );

        if (respuesta.data.success) {
          Alert.fire({
            title: `Bienvenido ${respuesta.data.response.firstName}`,
            icon: "success",
          });
          navigate("/");
          email.current.value = "";
          password.current.value = "";
        } else {
          console.log(respuesta);
          Alert.fire({
            title: respuesta.data.response,
            icon: "error",
          });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      Alert.fire({
        icon: "error",
        title: "Completa los campos",
        background: "black",
        color: "white",
      });
    }
  };

  const responseGoogle = async (respuesta) => {
    let usuarioGoogle = {
      email: respuesta.profileObj.email,
      password: respuesta.profileObj.googleId,
      flagGoogle: true,
    };
    await dispatch(usersActions.signInUser(usuarioGoogle))
      .then((res) => {
        if (res.data.success) {
          console.log(res);
          Alert.fire({
            icon: "success",
            title: "Bienvenido/a ",
            timer: 1000,
          });
          navigate("/");
        } else {
          console.log(res);
          Alert.fire({
            title: res.data.error.errors.message,
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Alert.fire({
          icon: "error",
          title: "Debe registrarse antes de ingresar",
        });
      });
  };

  return (
    <>
      <div className="loguearHeader">
        <h1 className="tittleRegistro">INICIAR SESIÓN</h1>
      </div>
      <div className="form">
        <Form
          className="flex flex-column justify-center items-center py-5"
          variant="light"
          onSubmit={loguearse}
        >
          <h1 className="titleForm">BIENVENIDO</h1>

          <h2 class="text-center text-2xl">
            Aùn no estas registrado?
            <Link to="/Registrarse" className="text-red-600"> Registrate</Link>
          </h2>
          <Form.Group className="m-3 flex justify-center items-center" controlId="formBasicEmail">
            <Form.Control 
              type="email" 
              placeholder="Email" 
              ref={email} 
              className="shadow-lg"
              style={{maxWidth: '300px', width: '300px'}}
            />
          </Form.Group>

          <Form.Group className="m-3 flex justify-center items-center" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Contraseña"
              ref={password}
              className="shadow-lg"
              style={{maxWidth: '300px', width: '300px'}}
            />
          </Form.Group>

          <div className="d-flex justify-content-center align-center container-buttons">
            <Button className="bg-red-600 hover:bg-red-700 font-semibold py-3 px-5 mr-4 rounded-lg" style={{border: 'none'}} type="submit">
              Ingresar
            </Button>

            {/* <span className="o-google">o</span> */}

            <GoogleLogin
              clientId="298582516064-getr6393pgro6pje2hs218l17t27bdv5.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  className="bg-red-600 hover:bg-red-700 px-4 rounded-lg"
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mx-3" style={{ fontSize: "2rem" }} />
                </button>
              )}
              buttonText="Registarse con Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </Form>
      </div>
    </>
  );
};

export default LogIn;
