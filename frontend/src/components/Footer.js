import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="relative bg-red-600 pt-8 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <h5 class="text-4xl fonat-semibold text-neutral-50">
              ¡NO TE PIERDAS NINGUNA NOVEDAD!
            </h5>
            <h5 class="text-4xl mt-0 mb-2 text-neutral-50">
              Seguinos en nuestras redes sociales.
            </h5>
            <div class="mt-6 lg:mb-0 mb-6">
              <button
                class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-twitter text-red-500"></i>
              </button>
              <button
                class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-facebook-square text-red-500"></i>
              </button>
              <button
                class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-instagram text-red-500"></i>
              </button>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-neutral-50 text-4xl font-semibold mb-2">
                  Links
                </span>
                <ul class="list-unstyled">
                  <li>
                  <Link to="/"
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                  <Link to="/Nosotros"
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                    >
                      NOSOTROS
                    </Link>
                  </li>
                  <li>
                  <Link to="/NuestrosGins"
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                    >
                      NUESTROS GINS
                    </Link>
                  </li>
                  <li>
                  <Link to="/Cocktails"
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                    >
                      COCKTAILS
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-neutral-50 text-4xl font-semibold mb-2">
                  Comprar
                </span>
                <ul class="list-unstyled">
                  <li>
                  <Link to="/NuestrosGins"
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                    >
                      TIENDA
                    </Link>
                  </li>
                  <li>
                  <Link to="/Loguearse"
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                    >
                      INGRESÁ
                    </Link>
                  </li>
                  <li>
                  <Link to="/Registrarse"
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                    >
                      REGISTRATE
                    </Link>
                  </li>
                  <li>
                    <Link to="/Legales"
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                    >
                      RESPONSABILIDAD SOCIAL
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center text-white ">
          <Link to="/">
            <img src="/assets/logoluxury.png" alt="logo" class="w-30 h-20" />
          </Link>
        </div>
        <div class="flex flex-wrap items-center md:justify-between justify-center ">
          <div class="w-full text-center">
            <div class="text-2xl text-neutral-50 font-semibold ">
              Copyright ©{" "}
              <span id="get-current-year">{new Date().getFullYear()}</span>
               LUXURYDRINKS S.R.L import company
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
