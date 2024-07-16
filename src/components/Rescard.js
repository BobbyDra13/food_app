import { RES_URL } from "../utilis/constants";

const Rescard = (props) => {
    const {ResData} = props;
    const {cloudinaryImageId,name,cuisines,avgRatingString} = ResData.info; 
    return (
        <div className="m-4 p-4 w-60 bg-gray-100 hover:bg-gray-300 rounded-md">
            <div>
            <img className="w-40 rounded-md" src={RES_URL+cloudinaryImageId} />
            <h3 className="font-bold">{name}</h3>
            <h3 className="flex">{cuisines.join(",")}</h3>
            <h3>{avgRatingString}</h3>
            <h3>{ResData.info.sla.deliveryTime} minutes</h3>
            </div>
        </div>
    )
};

export default Rescard;