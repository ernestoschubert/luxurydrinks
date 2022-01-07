import React from 'react'
import { Form, Button } from 'react-bootstrap'

const SignUp = () => {
    return (
            <Form className="form-container" variant="light">

                <h1 className="mb-5" style={{color: 'black'}}>Registro</h1>

                <Form.Group className="mb-5 col-6" controlId="formBasicNombre">
                    <Form.Label className="text-light">Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>

                <Form.Group className="mb-5 " controlId="formBasicApellido">
                    <Form.Label className="text-light">Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" />
                </Form.Group>

                <Form.Group className="mb-5 " controlId="formBasicEmail">
                    <Form.Label className="text-light">Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-5 col-5" controlId="formBasicPassword">
                    <Form.Label className="text-light">Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>

                <Form.Group className="mb-5 " controlId="formBasicImage">
                    <Form.Label className="text-light">URL de imagen</Form.Label>
                    <Form.Control type="text" placeholder="Imagen" />
                </Form.Group>

                <div className="d-flex justify-content-center align-center container-buttons">

                    <Button className="button-send" type="submit">
                        Registrarse
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

export default SignUp;