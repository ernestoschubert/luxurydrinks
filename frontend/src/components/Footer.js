import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer class="relative bg-red-600 pt-8 pb-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-5xl fonat-semibold text-neutral-50">No te pierdas ninguna novedad!</h4>
        <h5 class="text-4xl mt-0 mb-2 text-neutral-50">
          Síguenos en nuestras redes sociales.
        </h5>
        <div class="mt-6 lg:mb-0 mb-6">
          <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-twitter"></i></button><button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-facebook-square"></i></button><button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-instagram"></i></button>
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-neutral-50 text-4xl font-semibold mb-2">Links</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl" href="https://www.creative-tim.com/presentation?ref=njs-profile">Home</a>
              </li>
              <li>
                <a class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl" href="https://blog.creative-tim.com?ref=njs-profile">Nosotros</a>
              </li>
              <li>
                <a class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl" href="https://www.github.com/creativetimofficial?ref=njs-profile">Nuestros Gins</a>
              </li>
              <li>
                <a class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Cocktails</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-neutral-50 text-4xl font-semibold mb-2">Comprar</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">Tienda</a>
              </li>
              <li>
                <a class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl" href="https://creative-tim.com/terms?ref=njs-profile">Ingresa</a>
              </li>
              <li>
                <a class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl" href="https://creative-tim.com/privacy?ref=njs-profile">Registrate</a>
              </li>
              <li>
                <a class="text-neutral-50 hover:text-blueGray-800 font-semibold block pb-2 text-3xl" href="https://creative-tim.com/contact-us?ref=njs-profile">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300"/>
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-2xl text-neutral-50 font-semibold py-1">
          Copyright © <span id="get-current-year">2022</span><a href="https://www.creative-tim.com/product/notus-js" class="text-neutral-50 hover:text-gray-800" target="_blank"> LUXURYDRINKS S.R.L</a>
          <a href="https://www.creative-tim.com?ref=njs-profile" class="text-neutral-50 hover:text-blueGray-800"> import company</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
