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
      <div className="bg-[#161D2F] px-[28px] py-[32px] w-[96px] h-[90vh] rounded-[20px] items-center flex justify-between flex-col max-md:rounded-[0px] max-md:w-full max-md:h-[56px] max-md:py-[18px] max-md:flex-row max-md:absolute left-0 top-0">
        <div className="flex flex-col gap-[75px] max-md:flex-row max-md:gap-0 max-md:w-full">
          <img className="cursor-pointer" src={Film} />
          <div className="flex flex-col items-center gap-[40px] max-md:gap-[24px] max-md:flex-row max-md:w-full max-md:justify-center">
            <img
              onClick={onAllClick}
              src={All}
              className="cursor-pointer min-w-[20px] max-md:min-w-[16px]"
            />
            <img
              onClick={onMoviesClick}
              src={Movies}
              className="cursor-pointer min-w-[20px] max-md:min-w-[16px]"
            />
            <img
              onClick={onTVClick}
              src={TV}
              className="cursor-pointer min-w-[20px] max-md:min-w-[16px]"
            />
            <img
              onClick={onFavouritesClick}
              src={Favourites}
              className="cursor-pointer min-w-[20px] max-md:min-w-[16px]"
            />
          </div>
        </div>
        <img
          src={User}
          className="size-[40px]  border-1 border-[white] rounded-[100%] min-w-[40px] max-md:min-w-[24px] max-md:size-[24px]"
        />
      </div>
    </>
  );
}

export default Bar;
