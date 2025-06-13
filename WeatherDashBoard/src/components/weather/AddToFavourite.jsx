import { useContext, useState } from "react";
import red_heart from "../../assets/heart-red.svg";
import heart from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";

export default function AddToFavourite() {
  const { addToFavourite, removeFromFavourite, favourites } =
    useContext(FavouriteContext);
  const { weather } = useContext(WeatherContext);

  const [isFavourite, toggleFavourite] = useState(false);

  const { latitude, longitude, location } = weather;

  function handleFavourites() {
    const found = favourites.find((fav) => fav.location === location);
    console.log(found);
    if (!found) {
      addToFavourite(latitude, longitude, location);
    } else {
      removeFromFavourite(location);
    }
    console.log("In handle favourite function");
    toggleFavourite(!isFavourite);
  }

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] cursor-pointer"
          onClick={handleFavourites}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? red_heart : heart} alt="" />
        </button>
      </div>
    </div>
  );
}
