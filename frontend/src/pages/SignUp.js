import React, { useRef, useState } from "react";
import '../styles/signup.css'
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import usersActions from "../redux/actions/authActions";
import Swal from "sweetalert2";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { app } from "../services/firebase";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { v4 as uuidv4 } from "uuid";

const SignUp = () => {
  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState(null);
  const [edad, setEdad] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const userImg = useRef();
  const age = useRef();

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

  const handleDate = (e) => {
    let edad = e.target.value;
    setEdad(calcularEdad(edad));
  };

  const archivoHandler = async (e) => {
    const image = e.target.files[0];
    const imageUrl = URL.createObjectURL(image);
    setFileUrl(imageUrl);

    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(`${uuidv4()}-${image.name}`);
    await archivoPath.put(image);
    const enlaceUrl = await archivoPath.getDownloadURL();
    setFile(enlaceUrl);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Esta seguro que quiere eliminar esta imagen?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "", "success");
        userImg.current.value = "";
        setFileUrl("");
      }
    });
  };

  const crearUsuario = async (e) => {
    e.preventDefault();

    if (
      firstName.current.value !== "" &&
      lastName.current.value !== "" &&
      email.current.value &&
      password.current.value &&
      file &&
      age.current.value
    ) {
      try {
        const respuesta = await dispatch(
          usersActions.signUpUser({
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            password: password.current.value,
            userImg: file,
            age:
              edad >= 18
                ? edad
                : Alert.fire({ title: "Debes tener 18 o mas!", icon: "error" , timer:100000}),
          })
        );

        if (respuesta.data.success) {
          navigate("/");
          Alert.fire({
            title: `Gracias por registrarte`,
            icon: "success",
            timer: 9000
          });
          
        } else if (respuesta.data.error) {
          Alert.fire({
            title: `${respuesta.data.error}`,
            icon: "error",
          });
        } else {
          respuesta.data.errors.map((e) =>
            Alert.fire({
              title: e.message,
              icon: "error",
            })
          );
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      Alert.fire({
        title: "Complete los campos porfavor!",
        icon: "error",
      });
    }
  };

  const responseGoogle = async (respuesta) => {
    let usuarioGoogle = {
      firstName: respuesta.profileObj.givenName,
      // apellido: respuesta.profileObj.familyName ? respuesta.profileObj.familyName : 'null',
      lastName: respuesta.profileObj.familyName,
      email: respuesta.profileObj.email,
      password: respuesta.profileObj.googleId,
      userImg: respuesta.profileObj.imageUrl,
      google: true,
      age: 18,
    };
    await dispatch(usersActions.signUpUser(usuarioGoogle))
      .then((res) => {
        if (res.data.success) {
          
          navigate('/')
          Alert.fire({
            icon: "success",
            title: "Tu cuenta ha sido creada",
          });
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
          title: "Algo salio mal! Vuelve en un rato!",
        });
      });
  };

  return (
    <>
    <div className="registroHeader">
    <h1 className="tittleRegistro">REGISTRATE</h1>
  </div>
  <div className="form flex justify-center items-center" style={{heigth: 'auto'}}>
    <Form className="flex flex-column justify-center items-center" variant="light" onSubmit={crearUsuario}>
      <h1 className="titleForm mt-4">
        {" "}
        COMPLETÁ EL FORMULARIO{" "}
      </h1>
      <h2 class="text-center text-2xl mb-4">Ya estas registrado?
        <Link to="/Loguearse" className="ml-1 text-red-600">
        Ingresa
        </Link>
      </h2>
      <Form.Group className="m-3 flex justify-center items-center" controlId="formBasicNombre">
        <Form.Control
          type="text"
          placeholder="Nombre"
          ref={firstName}
          className="Nombre shadow-lg"
          style={{maxWidth: '300px', width: '300px'}}
        />
      </Form.Group>

      <Form.Group className="m-3 flex justify-center items-center" controlId="formBasicApellido">
        <Form.Control
          type="text"
          placeholder="Apellido"
          ref={lastName}
          className="Apellido shadow-lg"
          style={{maxWidth: '300px', width: '300px'}}
        />{" "}
      </Form.Group>

      <Form.Group className="m-3 flex justify-center items-center" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Email"
          ref={email}
          className="Email shadow-lg"
          style={{maxWidth: '300px', width: '300px'}}
        />{" "}
      </Form.Group>

      <Form.Group className="m-3 flex justify-center items-center" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Contraseña"
          ref={password}
          className="Contraseña shadow-lg"
          style={{maxWidth: '300px', width: '300px'}}
        />
      </Form.Group>

      <Form.Group className="m-3 col-12 flex justify-center items-center" controlId="formBasicAge">
        <Form.Control
          type="date"
          placeholder="Edad"
          ref={age}
          onChange={handleDate}
          className="Edad shadow-lg"
          style={{maxWidth: '300px', width: '300px'}}
        />{" "}
      </Form.Group>

      <label class="text-xl text-center">Imagen</label>
      <label class="w-64 flex flex-col items-center px-2 py-3 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-red-500 m-2">
        <svg
          class="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 text-base leading-normal">Seleccione un archivo</span>
        <input type="file" class="hidden" onChange={archivoHandler} id="fileupload" />
      </label>
      {fileUrl && (
        <div>
          <FaTrash
            class=" text-red-500 cursor-pointer"
            onClick={() => handleDelete()}
          />
          <img src={fileUrl} alt="avatar" class="h-40 w-50 m-5" />
        </div>
      )}
      {loading ? <Loader /> : null}
      <div className="flex m-4">
        <Button className="bg-red-600 hover:bg-red-700 font-semibold py-3 px-5 mr-4 rounded-lg" style={{border: 'none'}} type="submit" id="register">
          Registrarse
        </Button>

        <GoogleLogin
          clientId="251218806552-1ecbg0qlvip7gnl9qi6v0f1ifs18junr.apps.googleusercontent.com"
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

function calcularEdad(fecha) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }

  return edad;
}

export default SignUp;
