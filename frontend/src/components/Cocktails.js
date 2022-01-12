import "../styles/cocktails.css";
import LogoLuxury from "../components/assetsCocktails/luxuriuslogo.png";

const Cocteles = () => {
  return (
    <div>
      <div className="cocktailsHeader">
        <h1 className="tittleCocktails">Cocktails</h1>
      </div>
      <div className="cardsCocktails">
        <div className="subtittleCocktails">
          <h2>Trucos y sugerencias para una mejor experiencia Beefeater</h2>
        </div>
        <div class="min-h-screen w-full bg-white-00">
          <div class="max-w-screen-md mx-2 px-10 pt-20">
            <div class="bg-[#dc2626] md:h-48 rounded-lg shadow-md flex flex-wrap flex-col-reverse md:flex-col hover:bg-[#fee2e2]-700">
              <div class="w-full md:w-1/2 p-4">
                <img src={LogoLuxury} alt="" class="w-10" />
                <h3 class="text-3xl font-bold">Gin & Tonic</h3>
                <p class="text-white">
                  Get all your Luxury favorites delivered right to your doorstep
                  with Rappi on Uber Eats or DoorDash.
                </p>
              </div>
              <div class="w-full md:w-1/5 p-4 md:p-3">
                <img
                  src="https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/DrinkToMarket/9638/drink/3/drink_500x753.jpeg"
                  alt="gin&tonic"
                  class="w-64 mx-auto ml-16 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cocteles;
