import { useContext, useState } from "react";
import { LOGO_URL } from "../utilis/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "../utilis/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [name, setName] = useState("login");

  const onlinestatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items.length);

  //console.log("header rendered");
  return (
    <div className="flex justify-between m-4 p-4 bg-blue-500 rounded-xl items-center">
      <img alt="" className="w-14 shadow-xl ml-8 " src={LOGO_URL} />
      <h1 className="font-bold bg-slate-300 p-4 m-4 rounded-lg">
        React Project
      </h1>
      <div className="nav">
        <ul className="flex">
          <li className="p-4 hover:font-bold">
            <h3> Online:{onlinestatus ? "🟢" : "🔴"}</h3>
          </li>
          <li className="p-4 hover:font-bold">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-4 hover:font-bold">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="p-4 hover:font-bold">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="p-4 hover:font-bold">
            <Link to={"/cart"}>Cart ({cartItems} items)</Link>
          </li>
          <button
            className="hover:font-bold"
            onClick={() => {
              name === "login" ? setName("logout") : setName("login");
            }}>
            {name}
          </button>
          <h2 className="p-4 hover:font-bold">Person:{loggedInUser}</h2>
        </ul>
      </div>
    </div>
  );
};

export default Header;
