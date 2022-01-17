import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";
import productActions from "../redux/actions/productAction";
import Swal from "sweetalert2";
import { FaPlus, FaTrash } from "react-icons/fa";
import { app } from "../services/firebase";
import { Link } from "react-router-dom";

const PanelAdmin = (props) => {
  const {
    getUsers,
    users,
    getDrinks,
    drinks,
    deleteUser,
    deleteProduct,
    postAProduct,
    user,
  } = props;
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState("");
  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState(null);
  const [fileTarget, setFileTarget] = useState("");

  const bebidaNombre = useRef();
  const bebidaPrecio = useRef();
  const bebidaDesc = useRef();
  const bebidaImg = useRef();
  const bebidaStock = useRef();
  const bebidaTipo = useRef();

  useEffect(() => {
    getUsers();
    getDrinks();
    // eslint-disable-next-line
  }, []);

  const archivoHandler = (e) => {
    setFileTarget(e.target.files[0]);
    const image = e.target.files[0];
    const imageUrl = URL.createObjectURL(image);
    setFileUrl(imageUrl);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Esta seguro que quiere eliminar este usuario?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "", "success");
        deleteUser(id);
      }
    });
  };

  const handleDeleteImage = () => {
    Swal.fire({
      title: "Esta seguro que quiere eliminar esta imagen?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "", "success");
        bebidaImg.current.value = "";
        setFileUrl("");
      }
    });
  };

  const handleUpload = (e) => {
    setSelect(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (select === "local") {
      const storageRef = app.storage().ref();
      const archivoPath = storageRef.child(fileTarget.name);
      await archivoPath.put(fileTarget);
      const enlaceUrl = await archivoPath.getDownloadURL();
      setFile(enlaceUrl);
    } else {
      setFile(bebidaImg.current.value);
    }
    console.log(file);
    const newProduct = {
      description: bebidaDesc.current.value,
      drinkImg: file,
      drinkName: bebidaNombre.current.value,
      price: bebidaPrecio.current.value,
      stock: bebidaStock.current.value,
      type: bebidaTipo.current.value,
    };
    await postAProduct(newProduct, user.token).then((res) => console.log(res));
  };

  return (
    <>
      <div className="container-img-title">
        <img
          src="https://i.imgur.com/qv6liZR.png"
          className="img-admin"
          alt="admin"
        />
        <h5 className="title-admin">¡Hola, admin!</h5>
      </div>
      <div className="container-nav-panel">
        <h2 className="title-panel">USUARIOS</h2>
        <h2 className="title-panel">
          BEBIDAS{" "}
          <FaPlus
            onClick={() => setModal(!modal)}
            class="text-white cursor-pointer"
          />
        </h2>
      </div>
      <div className="container-box">
        <div className="box-usuarios">
          {users && users.length === 0 ? (
            <h1 style={{ color: "black" }}>Loading...</h1>
          ) : (
            <div className="scrollbar">
              {users.map((user) => (
                <div>
                  <h3>Usuario: {user.email}</h3>
                  <img
                    className="usuario-panel-foto"
                    src={user.userImg}
                    alt="foto"
                  />
                  <img
                    className="icon-admin"
                    onClick={() => {
                      handleDelete(user._id);
                    }}
                    style={{ width: "8%", marginLeft: "2%" }}
                    src="https://i.imgur.com/1BHcZAN.png"
                    alt="delete"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="box-bebidas">
          {drinks.length === 0 ? (
            <h1 style={{ color: "black" }}>Loading...</h1>
          ) : (
            <div className="scrollbar">
              {drinks.map((drink) => (
                <div class="flex flex-col justify-evenly">
                  <div class="inline">
                    <h3>Bebida:</h3>
                    <img
                      className="usuario-panel-foto"
                      src={drink.drinkImg}
                      alt="foto"
                    />
                    <span> {drink.drinkName}</span>
                  </div>
                  <div class="inline">
                    <img
                      className="icon-admin"
                      onClick={() => {
                        deleteProduct(drink._id);
                      }}
                      style={{ width: "8%", marginLeft: "2%" }}
                      src="https://i.imgur.com/1BHcZAN.png"
                      alt="delete"
                    />
                    <Link to={`/Gin/${drink._id}`}>
                      <img
                        className="icon-admin"
                        style={{ width: "8%", marginLeft: "2%" }}
                        src="https://i.imgur.com/KGctDYX.png"
                        alt="edit"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="container-box-ultimos">
        <div className="box-ultimos">
          <h3 className="h3-box-ultimos">Ultimos Usuarios :</h3>
          {users
            .slice(5)
            .reverse()
            .map((user) => (
              <div className="ultimos-usuarios-map">
                <h3>Usuario: {user.email}</h3>
                <img
                  className="usuario-panel-foto"
                  src={user.userImg}
                  alt="foto"
                />
              </div>
            ))}
        </div>
        <div className="box-ultimos scrollbar">
          <h3 className="h3-box-ultimos">Ultimas Bebidas :</h3>
          {drinks.length === 0 ? (
            <h1 style={{ color: "black" }}>Loading...</h1>
          ) : (
            drinks
              .slice(7)
              .reverse()
              .map((drink) => (
                <div className="ultimos-usuarios-map">
                  <h3>Usuario: {drink.drinkName}</h3>
                  <img
                    className="usuario-panel-foto"
                    src={drink.drinkImg}
                    alt="foto"
                  />
                </div>
              ))
          )}
        </div>
      </div>
      {modal && (
        <div class="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50">
          <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
            <div class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
              <p class="font-semibold text-gray-800">Agregar bebidas</p>
              <svg
                onClick={() => setModal(false)}
                class="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="flex flex-col px-6 py-5 bg-gray-50">
                <p class="mb-2 font-semibold text-gray-700">
                  Nombre de la bebida
                </p>
                <input
                  type="text"
                  ref={bebidaNombre}
                  placeholder="Escriba aqui el nombre de su producto"
                  class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm"
                  required
                />
                <p class="mb-2 font-semibold text-gray-700">Tipo de bebida</p>
                <input
                  type="text"
                  ref={bebidaTipo}
                  placeholder="Escriba aqui el nombre del tipo de producto"
                  class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm"
                  required
                />
                <p class="mb-2 font-semibold text-gray-700">Precio</p>
                <input
                  ref={bebidaPrecio}
                  type="number"
                  placeholder="Escriba aqui el precio de su producto"
                  class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm"
                  required
                />
                <p class="mb-2 font-semibold text-gray-700">Stock</p>
                <input
                  ref={bebidaStock}
                  type="number"
                  placeholder="Escriba aqui el stock de su producto"
                  class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm"
                  required
                />
                <p class="mb-2 font-semibold text-gray-700">Descripciòn</p>
                <textarea
                  ref={bebidaDesc}
                  type="text"
                  placeholder="Escriba aca la descripcion de su producto"
                  class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
                  id=""
                  required
                ></textarea>
                <div class="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
                  <div class="w-full sm:w-1/2">
                    <p class="mb-2 font-semibold text-gray-700">Imagen</p>
                    <select
                      onChange={(e) => handleUpload(e)}
                      type="text"
                      name=""
                      class="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                      id=""
                      required
                    >
                      <option value="0">Elija como subir la imagen</option>
                      <option value="url">URL</option>
                      <option value="local">LOCAL</option>
                    </select>
                  </div>
                </div>
                {select === "url" ? (
                  <>
                    <input
                      required
                      ref={bebidaImg}
                      placeholder="URL de la imagen"
                      class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm"
                    />
                  </>
                ) : select === "local" ? (
                  <>
                    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white m-5">
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
                        ref={bebidaImg}
                        onChange={archivoHandler}
                        required
                      />
                    </label>
                    {fileUrl && (
                      <div>
                        <FaTrash
                          class=" text-red-500 cursor-pointer"
                          onClick={() => handleDeleteImage()}
                        />
                        <img src={fileUrl} alt="avatar" class="h-40 w-50 m-5" />
                      </div>
                    )}
                  </>
                ) : null}
                <hr />
              </div>
              <div class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
                <p
                  class="font-semibold text-gray-600 cursor-pointer"
                  onClick={() => setModal(!modal)}
                >
                  Cancelar
                </p>
                <button
                  type="submit"
                  class="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = {
  getUsers: authActions.getUsers,
  getDrinks: productActions.fetchProducts,
  deleteUser: authActions.deleteUser,
  deleteProduct: productActions.deleteProduct,
  postAProduct: productActions.postAProduct,
};
const mapStateToProps = (state) => {
  return {
    users: state.authReducers.users,
    drinks: state.productsReducer.products,
    user: state.authReducers.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PanelAdmin);
