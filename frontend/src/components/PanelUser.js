import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { app } from "../services/firebase";
import authActions from "../redux/actions/authActions";
import { v4 as uuidv4 } from "uuid";
import { Link, Navigate, useNavigate } from "react-router-dom";

const PanelUser = (props) => {
  console.log(props.user);
  const { user, editUser } = props;

  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState(null);
  const navigate = useNavigate()
  

  const userCorreo = useRef();
  const userContraseña = useRef();

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
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newInfo = {};
    if (userCorreo.current.value !== "") {
      newInfo.email = userCorreo.current.value;
    }
    if (userContraseña.current.value !== "") {
      newInfo.password = userContraseña.current.value;
    }
    if (file) {
      newInfo.userImg = file;
    }

    editUser(user._id, newInfo, user.token).then((res) => {
      console.log(res);
      if (!res.success) {
        Swal.fire(res.error, "", "error");
      } else {
        navigate("/")
        window.location.reload()
        Swal.fire("Info actualizada correctamente!", "", "success");
      }
    });
  };
  return (
      
      <div class="container w-screen relative mt-0 shadow-2xl rounded my-2 overflow-hidden">
        <div class=" h-64 w-screen bg-blue-600 overflow-hidden relative">
          <img
            src="https://images.pexels.com/photos/6174132/pexels-photo-6174132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            class=" bg w-screen h-full object-cover object-center absolute"
          />
          <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
            {user && (
              <img
                src={user.userImg}
                alt={user.firstName}
                class="h-24 w-24 object-cover rounded-full"
              />
            )}
            { user && (<h2 class="text-2xl font-semibold">{user.firstName}</h2>)}
            <h4 class="text-sm font-semibold">The Beefeater fan</h4>
          </div>
        </div>
        <div class="grid grid-cols-12 bg-white ">
          <div class="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
            <button class="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold hover:bg-red-700 hover:text-gray-200">
              Información básica
            </button>

            <Link
              to="/"
              class="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-red-700 hover:text-gray-200"
            >
              Cancelar
            </Link>
          </div>

          <div class="container col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
            <div class="px-4 pt-4">
              <form
                onSubmit={handleSubmit}
                class="container flex flex-col space-y-8"
              >
                <div>
                  <h3 class="text-2xl font-semibold">Información básica</h3>
                  <hr />
                </div>

                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div class="form-item w-full">
                    <label class="text-xl ">Email</label>
                    <input
                      type="text"
                      ref={userCorreo}
                      placeholder="Correo"
                      class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                    />
                  </div>
                </div>

                <div class="form-item">
                  <label class="text-xl ">Contraseña</label>
                  <input
                    type="text"
                    ref={userContraseña}
                    placeholder="Contraseña"
                    class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                  />
                </div>
                <div class="form-item">
                  <label class="text-xl ">Imagen</label>
                  <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-red-500 m-5">
                    <img
                      src={fileUrl}
                      class="h-24 w-24 object-cover rounded-full"
                      alt=""
                    />
                    <svg
                      class="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span class="mt-2 text-base leading-normal">
                      Seleccione un archivo
                    </span>
                    <input
                      type="file"
                      class="hidden"
                      onChange={archivoHandler}
                    />
                  </label>
                </div>
                <button
                  class="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-red-700 hover:text-gray-200"
                  type="submit"
                >
                  Guardar cambios
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};
const mapDispatchToProps = {
  editUser: authActions.editUser,
};
const mapStateToProps = (state) => {
  return {
    user: state.authReducers.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PanelUser);
