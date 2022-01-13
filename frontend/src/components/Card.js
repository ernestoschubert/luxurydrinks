import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <>
    <Link to={`/Gin/${card._id}`} class="no-underline" >
      <div class="wrapper antialiased text-gray-900 ">
        <div>
          <img
            src={card.drinkImg}
            alt={card.drinkName}
            class="w-full object-cover object-center rounded-lg shadow-md"
          />
          <div class="relative px-4 -mt-16  ">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="flex items-baseline">
                <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
                <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  {card.type}
                </div>
              </div>
              <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              {card.drinkName}
              </h4>
              <div class="mt-1">
                ${card.price}
              </div>
              <div class="mt-4">
                <span class="text-teal-600 text-md font-semibold">
                  Stock:
                </span>
                <span class="text-sm text-gray-600">
                {card.stock}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
};

export default Card;
