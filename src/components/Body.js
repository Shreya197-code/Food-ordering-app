
import ResturantCard from "./ResturantCard";
import { useEffect ,useState} from "react";
import Shimmer from "./Shimmer";


const Body=()=>{
    const [listofResturants, setlistofResturants] = useState([]);
    const [filteredResturants, setFilteredResturants] = useState([]);

const [searchText, setSearchText] = useState("");

useEffect(()=>{
    //API call to get the data from the server
 fetchData();
},[]);

const fetchData=async()=>{
    const data=await fetch(
" https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.69484&lng=75.86755649999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


    const json= await data.json();

    console.log(
   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
//optional chaining
   setlistofResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
   
//conditional rendering

   return listofResturants.length === 0 ? (
  <Shimmer />
) : (
  <div className="Body-container">

    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for restaurants, cuisines and dishes"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      <button
        className="search-btn"
        onClick={() => {
          const filteredList = listofResturants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredResturants(filteredList); 
        }}
      >
        Search
      </button>
    </div>




    <div className="filter">
        <button className="filter-btn" onClick={()=>
            {
                //filter resturants
                const filterList=listofResturants.filter((res)=>res.info.avgRating>4);
                setFilteredResturants(filterList);
            }
        }>Filter</button>

    </div>
    <div className="resturant-container">
    {filteredResturants.map((restaurant) => (  //to traverse the array of objects
    <ResturantCard 
      key={restaurant.info.id} 
      resData={restaurant} 
    />
  ))}
  </div>
    </div>
    );
    
};

export default Body;


