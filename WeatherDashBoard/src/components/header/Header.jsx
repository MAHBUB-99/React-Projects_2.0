import {useState} from 'react';
import FavouriteModal from "./FavouriteModal";
import Favourite from "./Favourtie";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  const [fav,setFav] = useState(false);
  return (
    <div className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <Search />
          <Favourite fav={fav} setFav={setFav}/>
          {fav && <FavouriteModal />}
        </div>
      </nav>
    </div>
  );
}
