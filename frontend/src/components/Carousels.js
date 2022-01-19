import Slider from "react-slick";
import { Card } from "react-bootstrap";

const carruselItems = [
  {
    id: 1,
    nombre: "BEEFEATER LONDON DRY GIN",
    imagen:
      "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/ProductToMarket/3558/productList/7/productList_500x753.png",
  },
  {
    id: 2,
    nombre: "BEEFEATER PINK GIN",
    imagen:
      "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/ProductToMarket/3561/productList/6/productList_500x753.png",
  },
  {
    id: 3,
    nombre: "BEEFEATER BLOOD ORANGE",
    imagen:
      "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/ProductToMarket/3560/productList/7/productList_500x753.png",
  },
  {
    id: 4,
    nombre: "BEEFEATER PEACH & RASPBERRRY GIN",
    imagen:
      "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/prod/ProductToMarket/3848/productList/4/productList_500x753.png",
  },
  {
    id: 5,
    nombre: "BEEFEATER BLACKBERRY GIN",
    imagen:
      "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/prod/ProductToMarket/3647/productList/4/productList_500x753.png",
  },
  {
    id: 6,
    nombre: "BEEFEATER 24",
    imagen:
      "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/ProductToMarket/3562/productList/6/productList_500x753.png",
  },
  {
    id: 7,
    nombre: "BEEFEATER LONDON GARDEN",
    imagen:
      "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/ProductToMarket/3559/productList/7/productList_500x753.png",
  },
  {
    id: 8,
    nombre: "BEEFEATER PINK GIN & SODA",
    imagen:
      "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/ProductToMarket/3883/productList/9/productList_500x753.png",
  },
  {
    id: 9,
    nombre: "BEEFEATER LIGHT",
    imagen:
      "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/ProductToMarket/4478/productList/1/productList_500x753.png",
  },
  {
    id: 10,
    nombre: "St. PIERRE SUGAR FREE",
    imagen:
      "https://stpierregroup.com.br/admin/themes/files/uploads/99aef4c9b16841363f3d41a36ce9062c.png",
  },
  {
    id: 11,
    nombre: "St. PIERRE TONIC WATER",
    imagen:
      "https://stpierregroup.com.br/admin/themes/files/uploads/fcd96c0fd5458851a5003a0655994acd.png",
  },
  {
    id: 12,
    nombre: "St. PIERRE PINK LEMONADE",
    imagen:
      "https://stpierregroup.com.br/admin/themes/files/uploads/233becd8f8ae1a803d4e3dc1a04642a0.png",
  },
];

function Carousels() {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    slidesToShow: 1,
    speed: 900,
    rows: 2,
    slidesPerRow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          speed: 900,
          rows: 4,
          slidesPerRow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {carruselItems.map((bebida) => {
          return (
            <div key={carruselItems.id} className="tarjetass">
              <Card className="mt-2 tarjeta">
                <Card.Img variant="top" src={carruselItems.imagen} />
                <Card.Body>
                  <Card.Title>{carruselItems.nombre}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousels;
