import { useContext, useState } from "react";
import getImageUrl from "../utils/cine-utils";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
import { MovieContext } from "../context";

export default function MovieCard({ movie }) {
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { cartData, setCartData } = useContext(MovieContext);

  const handleAddToCart = (event, movie) => {
    event.stopPropagation();
    // console.log("Cart Data", cartData);
    const found = cartData.find((item)=> item.id === movie.id);
    if(!found)
    {
        setCartData([...cartData,movie]);
    }
    else
    {
        alert("Already in cart");
    }
  };

  const handleShowMovieDetails = () => {
    setShowMovieDetails(true);
    setSelectedMovie(movie);
  };
  const handleCloseMovieDetails = () => {
    setShowMovieDetails(false);
    setSelectedMovie(null);
  };
  return (
    <>
      {showMovieDetails && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleCloseMovieDetails}
          handleAddToCart={handleAddToCart}
        />
      )}
      <figure
        className="p-3 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
        onClick={() => handleShowMovieDetails(movie)}
      >
        <img
          className="w-full object-cover"
          src={getImageUrl(movie.cover)}
          alt={movie.title}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={movie.rating} />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
            onClick={(event) => handleAddToCart(event, movie)}
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
}
