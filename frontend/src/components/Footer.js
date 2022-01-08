import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer bg-red-600 relative pt-1 border-b-2 border-blue-700">
      <div class="container mx-auto px-6">
        <div class="sm:flex sm:mt-8">
          <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div class="flex flex-col">
              <div class="flex items-center flex-shrink-0 text-white mr-6">
                <Link to="/">
                  <img
                    src="./assets/luxuriuslogo.png"
                    alt="logo"
                    class="w-30 h-20"
                  />
                </Link>
              </div>
              <div class="text-sm lg:flex-grow ">
                <Link
                  to="/"
                  class="block mt-4 lg:inline-block lg:mt-0  text-zinc-50 hover:text-white mr-4 text-base active:border-b-2 hover:border-white border-transparent"
                >
                  Home
                </Link>
                <Link
                  to="/Nosotros"
                  class="block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4 text-base active:border-b-2 hover:border-b-2"
                >
                  Nosotros
                </Link>
                <Link
                  to="/NuestrosGins"
                  class="block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2"
                >
                  Nuestros Gins
                </Link>
                <Link
                  to="/Cocktails"
                  class="block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2"
                >
                  Cocktails
                </Link>
              </div>
            </div>
            <div class="flex flex-col">
              <ul class="m-2 flex  ">
                <li class="mr-4">
                  <img
                    src="./assets/social/icon-white-yt.png"
                    alt="youtube"
                    class="w-30 h-30"
                  />
                </li>
                <li class="mr-4">
                  <img
                    src="./assets/social/icon-white-fb.png"
                    alt="facebook"
                    class="w-30 h-30"
                  />
                </li>
                <li class="mr-4">
                  <img
                    src="./assets/social/icon-white-ig.png"
                    alt="instagram"
                    class="w-30 h-30"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div class="sm:w-2/3 text-center py-6">
            <p class="text-sm text-blue-700 font-bold mb-2">
              © 2022 by Luxury Drinks
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
