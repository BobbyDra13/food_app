import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setShowIndex }) => {
  const toggleClick = () => {
    setShowIndex();
  };

  return (
    <div className="">
      <div className="w-6/12 bg-gray-300 p-4 mx-auto my-3 border-b-2 border-black ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={toggleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
