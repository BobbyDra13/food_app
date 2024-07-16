import Rescard from "./Rescard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";

const Body = () => {
  const [List, setList] = useState([]);
  const [FilterList, setFilterList] = useState([]);

  const [searchtext, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.423376&lng=79.964974&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonval = await data.json();
    // console.log(jsonval);

    setList(
      jsonval?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterList(
      jsonval?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlinestatus = useOnlineStatus();

  if (onlinestatus === false)
    return <h1>You are offline!!!... Please Check your internet connection</h1>;

  // console.log(FilterList);
  return List.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center">
        <div className="m-2 p-2">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchtext}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
        </div>
        <button
          className="m-2 p-2 border-solid border-white bg-blue-500 rounded-lg"
          onClick={() => {
            console.log(searchtext);
            const filteredRestaurants = List.filter((res) =>
              res.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );
            // console.log(filteredRestaurants);
            setFilterList(filteredRestaurants);
          }}>
          Search
        </button>
        <button
          className="m-2 p-2 border-solid border-white bg-pink-300 rounded-md"
          onClick={() => {
            const filteredList = List.filter(
              (res) => res.info.avgRating >= 4.3
            );
            setFilterList(filteredList);
          }}>
          Toggle for top rated ones
        </button>
      </div>
      <div className="flex flex-wrap">
        {FilterList?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}>
            <Rescard ResData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
