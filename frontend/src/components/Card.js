<<<<<<< HEAD
const Card = () => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src="/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
=======
const Card = ({ card }) => {
  return (
    <>
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
    </>
>>>>>>> fd8ed3458ed91d637578cd53269b6c43042ecea1
  );
};

export default Card;
