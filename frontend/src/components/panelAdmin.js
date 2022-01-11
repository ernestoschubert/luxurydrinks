import React from 'react';

const panelAdmin = () => {
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

                </div>
                <div className="box-usuarios">

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

export default panelAdmin;