import React, { useRef } from "react";
import { Form, Button } from 'react-bootstrap'
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";
import usersActions from '../redux/actions/authActions';


const LogIn = () => {

    const Alert = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        background: 'black',
        color: 'white',
        timerProgressBar: true,
        didOpen: toast => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

  const dispatch = useDispatch();

  const email = useRef()
  const password = useRef()

  const loguearse = async(e) =>{
    e.preventDefault()
    if(email.current.value != '' && password.current.value != ''){

      try{
        
        const respuesta = await dispatch(
          usersActions.signInUser({
            email: email.current.value,
            password: password.current.value,
          })
          );

          if(respuesta.data.success){
            Alert.fire({
              title: `Bienvenido ${respuesta.data.response.firstName}`,
              icon: 'success'
            })
            email.current.value = ''
            password.current.value = ''
          }else{
            console.log(respuesta)
            Alert.fire({
            title: respuesta.error[0].message,
            icon: 'error'
          })}
          
        }catch(err){console.log(err)}
      }else{
        Alert.fire({
          icon: 'error',
          title: 'Completa los campos',
          background: 'white'
        })
      }
  }


    return (
        <Form className="d-flex flex-column form-container col-10" variant="light" onSubmit={loguearse}>

            <h1 className="mb-5" style={{ color: 'black' }}>Loguearse</h1>

            <Form.Group className="mb-5 col-5" controlId="formBasicEmail">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control type="email" placeholder="Email" ref={email} />
            </Form.Group>

            <Form.Group className="mb-5 col-5" controlId="formBasicPassword">
                <Form.Label className="text-light">Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" ref={password} />
            </Form.Group>

            <div className="d-flex justify-content-center align-center container-buttons">

                <Button className="button-send" type="submit">
                    Ingresar
                </Button>

                {/* <span className="o-google">o</span> */}

                {/* <GoogleLogin
        clientId="298582516064-getr6393pgro6pje2hs218l17t27bdv5.apps.googleusercontent.com"
        render={(renderProps) => (
            <button onClick={renderProps.onClick} className="btn-google button-send" disabled={renderProps.disabled}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FcGoogle className="mx-3" style={{ fontSize: "2rem" }} />
            </button>
        )}
        buttonText="Registarse con Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
    /> */}

            </div>

        </Form>
    )
}

export default LogIn
