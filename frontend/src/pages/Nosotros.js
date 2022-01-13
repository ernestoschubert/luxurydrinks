import "../styles/nosotros.css";
import LogoLuxury from "../components/assetsCocktails/luxuriuslogo.png";

const Nosotros = () => {
  return (
    <div>
      <div className="nosotrosHeader">
        <h1 className="tittleNosotros">Nuestra Historia</h1>
      </div>
      <div className="containerNosotros">
        <div class="container">
          <div class="card">
            <div class="face face1">
              <div className="containerYearCard">
              <h4 className="yearCardNosotros">1835</h4><br/>
             <img className="yearCardNosotros" width="100" src="https://s3.eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/basic_uploads/sir-trevor/5da08345c4777.png" />
              </div>
             
              <div class="content">
                <img src="https://s3.eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/basic_uploads/sir-trevor/5da08345c4777.png" />
                <h3>El Fundador</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  James Burrough, fundador de Beefeater Gin, nace en Devon. Su
                  carrera como farmacéutico, le lleva a Toronto, Canadá.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
            <div className="containerYearCard">
            <h4 className="yearCardNosotros">1876</h4>
            <img className="yearCardNosotros" width="100" src="https://s3.eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/basic_uploads/sir-trevor/5da083e36a548.png" />
            </div>
              <div class="content">
                <img src="https://s3.eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/basic_uploads/sir-trevor/5da083e36a548.png" />
                <h3>Nace Beefeater</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                La destilería Chelsea, ubicada en la calle Cale, se inaugura bajo el control de la familia Taylor. Se convertiría en el primer hogar de la ginebra Beefeater.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
            <div className="containerYearCard">
            <h4 className="yearCardNosotros">1963</h4>
            <img className="yearCardNosotros" width="80" src="https://s3.eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/basic_uploads/sir-trevor/5da083c06577c.jpeg" />
            </div>
              <div class="content">
                <img src="https://s3.eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/basic_uploads/sir-trevor/5da083c06577c.jpeg"/>
                <h3>Éxito en USA</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                Beefeater comercializa tres de cada cuatro botellas de ginebra importadas a Estados Unidos. En 1963 fue la única ginebra seleccionada para embarcarse en el primer viaje de la Queen Elizabeth II a Nueva York.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div className="containerYearCard">
              <h4 className="yearCardNosotros">1987</h4><br/>
             <img className="yearCardNosotros" width="90" src="https://s3.eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/basic_uploads/sir-trevor/5da0832b3acb1.png"/>
              </div>
             
              <div class="content">
                <img src="https://s3.eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/basic_uploads/sir-trevor/5da0832b3acb1.png"/>
                <h3>Un Nuevo Comienzo</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                Beefeater deja de pertenecer a la familia Burrough después de casi 100 años y es comprada por Whitbread.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div className="containerYearCard">
              <h4 className="yearCardNosotros">1995</h4><br/>
             <img className="yearCardNosotros" width="60" src="https://s3.eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/basic_uploads/sir-trevor/5da0840049890.png"/>
              </div>
             
              <div class="content">
                <img src="https://s3.eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/basic_uploads/sir-trevor/5da0840049890.png"/>
                <h3>Un Nuevo Maestro</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                Desmond Payne se convierte en el Maestro Destilador.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div className="containerYearCard">
              <h4 className="yearCardNosotros">2005</h4><br/>
             <img className="yearCardNosotros" width="100" src="https://s3.eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/basic_uploads/sir-trevor/5da0842a6ccdf.jpeg"/>
              </div>
             
              <div class="content">
                <img src="https://s3.eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/basic_uploads/sir-trevor/5da0842a6ccdf.jpeg"/>
                <h3>Nuevos Dueños</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                Pernod Ricard compra Beefeater Dry Gin y pone en marcha un programa de reinversión en la marca.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div className="containerYearCard">
              <h4 className="yearCardNosotros">2008</h4><br/>
             <img className="yearCardNosotros" width="110" src={LogoLuxury}/>
              </div>
             
              <div class="content">
                <img width="130" src={LogoLuxury}/>
                <h3>Luxury Drinks</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  Crhis Pratt, argentino de padres estadounidenses y británicos, queda fascinado con la marca. Aprovecha sus contactos y se convierte en distribuidor oficial en Argentina.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div className="containerYearCard">
              <h4 className="yearCardNosotros">2019</h4><br/>
             <img className="yearCardNosotros" width="60" src="https://s3.eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/basic_uploads/sir-trevor/5da0844c1acec.png"/>
              </div>
             
              <div class="content">
                <img src="https://s3.eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/basic_uploads/sir-trevor/5da0844c1acec.png"/>
                <h3>The Best</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  La empresa tiene su época dorada al ser el único distribuidor oficial del gin tonic más premiado del mundo (2004 - 2019).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
