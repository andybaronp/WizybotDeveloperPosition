import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useProductsRecommendations from "../hooks/useProductsRecommendations";

export default function ProductCarousel() {
  const products = useProductsRecommendations();

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextProduct = () => {
    setActiveItemIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProduct = () => {
    setActiveItemIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextProduct();
    }

    if (touchEnd - touchStart > 75) {
      prevProduct();
    }
  };

  if (products.length === 0) return null;
  return (
    <div className="w-full max-w-md mx-auto relative rounded-xl  overflow-x-hidden bg-white ">
      <div
        className="relative w-full overflow-hidden  bg-white "
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute top-2 right-2 bg-gray-400 bg-opacity-50 text-white px-2 py-1 rounded-full text-[10px]">
          {activeItemIndex + 1} / {products.length}
        </div>

        {/* Tarjeta de producto */}
        <div className="w-full p-4">
          <div className="flex items-center gap-3">
            <img
              src={products[activeItemIndex]?.imageUrl}
              alt={products[activeItemIndex]?.displayTitle}
              className="size-16 object-contain  "
            />
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-sm min-h-[2.5rem] line-clamp-2 ">
                {products[activeItemIndex]?.displayTitle}
              </p>
              <p className="text-green-600 font-bold">
                {products[activeItemIndex]?.price}
              </p>
              <a
                href={products[activeItemIndex]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-xs"
              >
                View Page
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between  p-1 bg-white">
        <button
          onClick={prevProduct}
          className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-1">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveItemIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === activeItemIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextProduct}
          className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
