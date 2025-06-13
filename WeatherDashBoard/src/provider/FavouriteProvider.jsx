import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourite = (latitude, longitude, location) => {
        console.log("Add to favourite")

    setFavourites([
      ...favourites,
      { latitude: latitude, longitude: longitude, location: location },
    ]);
  };

  const removeFromFavourite = (location) => {
    console.log("Remove from favourite")
    const restFavourites = favourites.filter((fav) => fav.location != location);
    setFavourites(restFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{ addToFavourite, removeFromFavourite, favourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
