import image from "../../assets/heart.svg";
export default function Favourite({ fav, setFav }) {
  return (
    <button
      onClick={() => setFav(!fav)}
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
    >
      <img src={image} alt="" />
      <span>Favourite Locations</span>
    </button>
  );
}
