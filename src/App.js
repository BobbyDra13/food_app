import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Resmenu from "./components/Resmenu";
import UserContext from "./utilis/UserContext";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //This is for authentication process
  useEffect(() => {
    //api call to get a password and username
    const data = {
      name: "Manas Chandra",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="applayout">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const approute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resid",
        element: <Resmenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approute} />);
