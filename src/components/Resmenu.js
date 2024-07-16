import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utilis/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilis/useRestaurantMenu";
import ResCategory from "./ResCategory";

const Resmenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, city, avgRating } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //   console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR); //this is for item categories
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //   console.log(categories);
  return (
    <div className="text-center">
      <h1 className="m-8 font-bold text-3xl">{name}</h1>
      <h2>It is in {city}</h2>
      <h3>It has a rating of {avgRating}</h3>
      {categories.map((cats, index) => (
        <ResCategory
          key={cats.card?.card?.title}
          data={cats?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Resmenu;
