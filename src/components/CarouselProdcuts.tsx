import { useState } from "react";
import useProductsRecommendations from "../hooks/useProductsRecommendations";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselProducts() {
  const products = useProductsRecommendations();

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const handleDotClick = (index: number) => {
    setActiveItemIndex(index);
  };

  if (products.length === 0) return null;
  return (
    <div className="flex gap-3  flex-col overflow-x-hidden p-2   bg-white rounded-xl  relative ">
      <div className="px-1 w-full flex    justify-between items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          className="cursor-pointer hover:scale-110 transition-all"
          onClick={() => setActiveItemIndex((prev) => prev - 1)}
          disabled={activeItemIndex === 0}
        >
          <ChevronLeft className="size-5 bg-gray-300 rounded-full p-1 hover:bg-gray-400 transition-all" />
        </button>
        <button
          className="cursor-pointer hover:scale-110 transition-all"
          onClick={() => setActiveItemIndex((prev) => prev + 1)}
          disabled={activeItemIndex === products.length - 1}
        >
          <ChevronRight className="size-5 bg-gray-300 rounded-full p-1 hover:bg-gray-400 transition-all" />
        </button>
      </div>

      <div className="flex gap-2 overflow-x-hidden">
        <div className="  w-full   min-w-[90%] rounded-xl  h-24  p-2 flex gap-2  items-center   ">
          <img
            src={products[activeItemIndex].imageUrl}
            alt={products[activeItemIndex].displayTitle.slice(0, 60)}
            className="size-14 object-contain rounded-xl  "
          />

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold ">
              {products[activeItemIndex].displayTitle}
            </p>
            <p className="text-green-600 font-bold text-xs">
              {products[activeItemIndex].price}
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
