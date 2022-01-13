import React, { useEffect } from "react";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";
import productActions from "../redux/actions/productAction";
import Swal from "sweetalert2";
const PanelAdmin = (props) => {
  const { getUsers, users, getDrinks, drinks, deleteUser, deleteProduct } =
    props;

  useEffect(() => {
    getUsers();
    getDrinks();
    // eslint-disable-next-line
  }, []);

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
        <h2 className="title-panel">BEBIDAS</h2>
        <h2 className="title-panel">COCTELES</h2>
      </div>
      <div className="container-box">
        <div className="box-usuarios">
          {users.length === 0 ? (
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
                    style={{ width: "8%", marginLeft: "2%" }}
                    src="https://i.imgur.com/KGctDYX.png"
                    alt="edit"
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
                <div>
                  <h3>Bebida: {drink.drinkName}</h3>
                  <img
                    className="usuario-panel-foto"
                    src={drink.drinkImg}
                    alt="foto"
                  />
                  <img
                    className="icon-admin"
                    onClick={() => {
                      deleteProduct(drink._id);
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
        <div className="box-usuarios"></div>
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
        <div className="box-ultimos">
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
    </>
  );
};

const mapDispatchToProps = {
  getUsers: authActions.getUsers,
  getDrinks: productActions.fetchProducts,
  deleteUser: authActions.deleteUser,
  deleteProduct: productActions.deleteProduct,
};
const mapStateToProps = (state) => {
  return {
    users: state.authReducers.users,
    drinks: state.productsReducer.products,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PanelAdmin);
