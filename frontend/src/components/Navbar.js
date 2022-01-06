import {FaFacebookF} from 'react-icons/fa' 

const Navbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-red-600 p-2">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="./assets/luxuriuslogo.png" alt="logo" class="w-30 h-20" />
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full flex flex-grow lg:flex lg:items-end lg:w-auto lg:flex-col" >
        <ul class="m-2 flex  ">
            <li class='mr-4'>
                <img src='./assets/social/icon-white-yt.png' alt="youtube" class="w-30 h-30" />
            </li>
            <li class='mr-4'>
                <img src='./assets/social/icon-white-fb.png' alt="facebook" class="w-30 h-30" />
            </li>
            <li class='mr-4'>
                <img src='./assets/social/icon-white-ig.png' alt="instagram" class="w-30 h-30" />
            </li>
        </ul>
        <div class="text-sm lg:flex-grow ">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4 text-base"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4 text-base"
          >
            Nosotros
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white text-base"
          >
            Nuestros Gins
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white text-base"
          >
            Cocktails
          </a>
        </div>
        <div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
