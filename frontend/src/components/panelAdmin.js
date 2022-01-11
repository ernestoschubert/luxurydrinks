import React, {useEffect, useState} from 'react';
import { connect } from "react-redux"
import authActions from "../redux/actions/authActions";
import productActions from '../redux/actions/productAction';

const PanelAdmin = (props) => {

    const { getUsers, users, getDrinks, drinks } = props;

    useEffect(() => {
            getUsers()
            getDrinks()
    }, [])

    console.log('usuarioeffect', users);
    console.log('drinks', drinks);


    return (
        <>
        <div className="container-img-title">
            <img src="https://i.imgur.com/qv6liZR.png" className="img-admin" />
            <h5 className="title-admin">¡Hola, admin!</h5>
        </div>
            <div className="container-nav-panel">
                    <h2 className="title-panel">USUARIOS</h2>
                    <h2 className="title-panel">BEBIDAS</h2>
                    <h2 className="title-panel">COCTELES</h2>
            </div>
            <div className="container-box">
                <div className="box-usuarios">
                    {users.length === 0 ?
                     <h1 style={{color: 'black'}}>Loading...</h1>
                    :
                    <div className="scrollbar">
                     {users.map(user =>
                        <div className="container-scroll">
                            <h3>Usuario: {user.email}</h3>
                            <img className="usuario-panel-foto" src={user.userImg} alt="foto" />
                        </div>
                     )}
                     </div>
                        }
                </div>
                <div className="box-usuarios">
                {drinks.length === 0 ?
                     <h1 style={{color: 'black'}}>Loading...</h1>
                    :
                     drinks.map(drink =>
                        <div className="container-scroll">
                            <h3>Bebida: {drink.drinkName}</h3>
                            <img className="usuario-panel-foto" src={drink.drinkImg} alt="foto" />
                        </div>
                     )}
                </div>
                <div className="box-usuarios">

                </div>
            </div>
            <div className="container-box-ultimos">
                <div className="box-ultimos">
                    <h3 className="h3-box-ultimos">Ultimos Usuarios :</h3>
                </div>
                <div className="box-ultimos">
                <h3 className="h3-box-ultimos">Ultimas Bebidas :</h3>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    getUsers: authActions.getUsers,
    getDrinks: productActions.fetchProducts
  }
  const mapStateToProps = (state) => {
    return {
      users: state.authReducers.users,
      drinks: state.productsReducer.products
    }
  }
  
    export default connect(mapStateToProps, mapDispatchToProps)(PanelAdmin);