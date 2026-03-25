import React from "react";
import User from "../../../assets/Images/User.png";
import Film from "../../../assets/Images/FilmEmoji.svg";
import All from "../../../assets/Images/All.svg";
import TV from "../../../assets/Images/TV.svg";
import Movies from "../../../assets/Images/Movies.svg";
import Favourites from "../../../assets/Images/Favourites.svg";

function Bar({ onAllClick, onMoviesClick, onTVClick, onFavouritesClick }) {
  return (
    <>
      <div className="bg-[#161D2F] px-[28px] py-[32px] w-[96px] h-[90vh] rounded-[20px] items-center flex justify-between flex-col">
        <div className="flex flex-col gap-[75px]">
          <img className="cursor-pointer" src={Film} />
          <div className="flex flex-col items-center gap-[40px]">
            <img
              onClick={onAllClick}
              src={All}
              className="cursor-pointer hover:fill-[#FC4747] min-w-[20px]"
            />
            <img
              onClick={onMoviesClick}
              src={Movies}
              className="cursor-pointer min-w-[20px]"
            />
            <img
              onClick={onTVClick}
              src={TV}
              className="cursor-pointer min-w-[20px]"
            />
            <img
              onClick={onFavouritesClick}
              src={Favourites}
              className="cursor-pointer min-w-[20px]"
            />
          </div>
        </div>
        <img
          src={User}
          className="size-[40px]  border-1 border-[white] rounded-[100%] min-w-[40px]"
        />
      </div>
    </>
  );
}

export default Bar;
