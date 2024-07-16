import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resid) => {

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchdata();
    },[]);
    const fetchdata = async () => {
        const data = await fetch(MENU_URL+resid);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;