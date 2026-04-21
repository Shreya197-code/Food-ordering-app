import { CDN_URL } from "../utils/constants";


const ResturantCard = ({ resData }) => {
    const { name, cuisines, cloudinaryImageId ,avgRating, sla} = resData?.info || {};
    // const name = resData?.info?.name;
    // const cuisines = resData?.info?.cuisines;
    // const cloudinaryImageId = resData?.info?.cloudinaryImageId;



    if (!name) return <h2>Loading...</h2>; // or null

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="restaurant"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    );
};

export default ResturantCard;