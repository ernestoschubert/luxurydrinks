import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="relative bg-red-600 pt-8 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-5xl fonat-semibold text-neutral-50">
              No te pierdas ninguna novedad!
            </h4>
            <h5 class="text-4xl mt-0 mb-2 text-neutral-50">
              Síguenos en nuestras redes sociales.
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
                    <a
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      Nosotros
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                      href="https://www.github.com/creativetimofficial?ref=njs-profile"
                    >
                      Nuestros Gins
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    >
                      Cocktails
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-neutral-50 text-4xl font-semibold mb-2">
                  Comprar
                </span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                    >
                      Tienda
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Ingresa
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >
                      Registrate
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl"
                      href="https://creative-tim.com/contact-us?ref=njs-profile"
                    >
                      Contacto
                    </a>
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
