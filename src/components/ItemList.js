import { useDispatch } from "react-redux";
import { addItem } from "../utilis/cartSlice";

const ItemList = ({ items }) => {
  //   console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className=" border-gray-200 border-b-2 text-left flex justify-between"
          key={item.card.info.id}>
          <div>
            <div className="">
              <span className="font-bold text-sm">{item.card.info.name}</span>
              <span>
                💵
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div>
            <button
              className="p-2 m-2 bg-black text-white"
              onClick={() => handleAddItem(item)}>
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
