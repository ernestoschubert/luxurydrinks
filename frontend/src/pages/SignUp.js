import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import usersActions from "../redux/actions/authActions";
import Swal from "sweetalert2";
import GoogleLogin from 'react-google-login';
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const dispatch = useDispatch();

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

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const userImg = useRef();
  const age = useRef();

  const crearUsuario = async (e) => {
    e.preventDefault()
    if (firstName.current.value != '' && lastName.current.value != '' && email.current.value && password.current.value && userImg.current.value && age.current.value) {
      try {
        const respuesta = await dispatch(usersActions.signUpUser({
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          email: email.current.value,
          password: password.current.value,
          userImg: userImg.current.value,
          age: age.current.value >= 18 ? age.current.value : Alert.fire({title: 'Debes tener 18 o mas!', icon: 'error'})
        }))

        console.log(respuesta)
        if (respuesta.data.success) {
          Alert.fire({
            title: `Gracias por registrarte ${respuesta.data.response.newUser.firstName}`,
            icon: 'success'
          })
        } else if (respuesta.data.error) {
          Alert.fire({
            title: `${respuesta.data.error}`,
            icon: 'error'
          })
        }
        else {
          respuesta.data.errors.map(e => {
            Alert.fire({
              title: e.message,
              icon: 'error'
            })
          })
        }

      } catch (err) { console.log(err) }
    } else {
      Alert.fire({
        title: 'Complete los campos porfavor!',
        icon: 'error'
      })
    }
  }


  const responseGoogle = async (respuesta) => {
    console.log(respuesta);
    let usuarioGoogle = {
      firstName: respuesta.profileObj.givenName, 
      // apellido: respuesta.profileObj.familyName ? respuesta.profileObj.familyName : 'null',
      lastName: respuesta.profileObj.familyName,
      email: respuesta.profileObj.email,
      password: respuesta.profileObj.googleId,
      userImg: respuesta.profileObj.imageUrl,
      google: true,
      age: 18
    }
    await dispatch (usersActions.signUpUser(usuarioGoogle))
    .then(res => {
      if (res.data.success) {
        console.log(res)
        Alert.fire({
          icon: 'success',
          title: 'Tu cuenta ha sido creada'
        })
      }
      else{
        console.log(res)
        Alert.fire({
        title: res.data.error.errors.message,
        icon: 'error',
      })
    }
    })
    .catch((error) => {
      console.log(error)
      Alert.fire({
          icon: 'error',
          title: 'Algo salio mal! Vuelve en un rato!'
        })
  })
  }

  return (
    <Form className="form-container" variant="light" onSubmit={crearUsuario}>
      <h1 className="mb-5" style={{ color: "black" }}>
        {" "}
        Registro{" "}
      </h1>

      <Form.Group className="mb-5 col-6" controlId="formBasicNombre">
        <Form.Label className="text-light"> Nombre </Form.Label>
        <Form.Control type="text" placeholder="Nombre" ref={firstName} />
      </Form.Group>

      <Form.Group className="mb-5 " controlId="formBasicApellido">
        <Form.Label className="text-light"> Apellido </Form.Label>{" "}
        <Form.Control type="text" placeholder="Apellido" ref={lastName} />{" "}
      </Form.Group>

      <Form.Group className="mb-5 " controlId="formBasicEmail">
        <Form.Label className="text-light"> Email </Form.Label>{" "}
        <Form.Control type="text" placeholder="Email" ref={email} />{" "}
      </Form.Group>

      <Form.Group className="mb-5 col-5" controlId="formBasicPassword">
        <Form.Label className="text-light"> Contraseña </Form.Label>{" "}
        <Form.Control type="password" placeholder="Contraseña" ref={password} />{" "}
      </Form.Group>

      <Form.Group className="mb-5 col-6" controlId="formBasicNombre">
        <Form.Label className="text-light"> Edad </Form.Label>{" "}
        <Form.Control type="number" placeholder="Edad" ref={age} />{" "}
      </Form.Group>

      <Form.Group className="mb-5 " controlId="formBasicImage">
        <Form.Label className="text-light"> URL de imagen </Form.Label>{" "}
        <Form.Control type="text" placeholder="Imagen" ref={userImg} />{" "}
      </Form.Group>

      <div className="d-flex justify-content-center align-center container-buttons">
        <Button className="button-send" type="submit" class="">
          Registrarse{" "}
        </Button>

        {/* <span className="o-google">o</span> */}

        <GoogleLogin
          clientId="251218806552-1ecbg0qlvip7gnl9qi6v0f1ifs18junr.apps.googleusercontent.com"
          render={(renderProps) => (
            <button onClick={renderProps.onClick} className="btn-google button-send" disabled={renderProps.disabled}>
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
  );
};

export default SignUp;
