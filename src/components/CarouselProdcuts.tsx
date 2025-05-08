import { useState } from "react";

const products = [
  {
    id: "d9363f01-991c-4ce2-8c49-f650aaa70c0b",
    displayTitle: "Safely Everyday Laundry Detergent",
    url: "https://wizybot-demo-store.myshopify.com/products/safely-everyday-laundry-detergent",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0779/8125/3922/files/ScreenShot2023-06-24at12.16.35PM.png?v=1687627070",
  },
  {
    id: "dac37fff-526e-4fbc-88ba-188ab82161ad",
    displayTitle: "Bushel Lamper Plastic Laundry Basket",
    url: "https://wizybot-demo-store.myshopify.com/products/bushel-lamper-plastic-laundry-basket",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0779/8125/3922/files/ScreenShot2023-06-24at11.58.56AM.png?v=1687626239",
  },
  {
    id: "de2268ef-a4a5-4adb-bd05-fe7455cc30b2",
    displayTitle:
      "Costway Refrigerator Small Freezer Cooler Fridge Compact 3.2 cu ft. Unit",
    url: "https://wizybot-demo-store.myshopify.com/products/costway-refrigerator-small-freezer-cooler-fridge-compact-3-2-cu-ft-unit",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0779/8125/3922/files/ScreenShot2023-06-23at4.03.40PM.png?v=1687554306",
  },
  {
    id: "df61efb4-c51e-43f8-8904-1382f7a20f1c",
    displayTitle: "Women's Studded Heeled Moto Boots",
    url: "https://wizybot-demo-store.myshopify.com/products/womens-studded-heeled-moto-boots",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0779/8125/3922/files/ScreenShot2023-06-23at1.02.50PM.png?v=1687543437",
  },
];

function getRandomPrice() {
  return (Math.random() * 90 + 10).toFixed(2);
}

export default function CarouselProducts() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveItemIndex(index);
  };

  return (
    <div className="flex gap-3  flex-col overflow-x-hidden p-2   bg-white rounded-xl   ">
      <div className="flex gap-2 overflow-x-hidden">
        <div className="  w-full   min-w-[90%] rounded-xl  h-24  p-2 flex gap-2  items-center   ">
          <img
            src={products[activeItemIndex].imageUrl}
            alt={products[activeItemIndex].displayTitle}
            className="size-14 object-contain rounded-xl  "
          />

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold ">
              {products[activeItemIndex].displayTitle}
            </p>
            <p className="text-green-600 font-bold text-xs">
              {getRandomPrice()}
            </p>
            <a
              href={products[activeItemIndex].url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[10px]"
            >
              View Page
            </a>
          </div>
        </div>
      </div>

      <div className="   w-full  flex   gap-2  justify-center items-center">
        <button
          className={`w-4/12 h-2 rounded-full bg-blue-950/90 cursor-pointer transition-all ${
            activeItemIndex === 0 ? "bg-blue-600" : "bg-gray-300"
          }`}
          onClick={() => handleDotClick(0)}
        ></button>
        <button
          className={`w-4/12 h-2 rounded-full bg-blue-950/90 cursor-pointer transition-all ${
            activeItemIndex === 1 ? "bg-blue-600" : "bg-gray-300"
          }`}
          onClick={() => handleDotClick(1)}
        ></button>
        <button
          className={`w-4/12 h-2 rounded-full bg-blue-950/90 cursor-pointer transition-all ${
            activeItemIndex === 2 ? "bg-blue-600" : "bg-gray-300"
          }`}
          onClick={() => handleDotClick(2)}
        ></button>
      </div>
    </div>
  );
}
