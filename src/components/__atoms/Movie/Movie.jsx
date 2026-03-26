import React from "react";
import Movies from "../../../assets/Images/MoviesWhite.svg";
import TV from "../../../assets/Images/TVWhite.svg";
import Play from "../../../assets/Images/PlayBtn.png";

function Movie({ title, year, type, rating, image }) {
  return (
    <div className="flex-shrink-0 w-[470px] h-[230px] relative rounded-[8px] cursor-pointer relative flex items-center justify-center group">
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
        alt={title}
      />

      <div className="absolute left-[24px] bottom-[24px] text-white opacity-75">
        <div className="flex gap-[8px] text-sm items-center">
          <span>{year}</span>
          <span>•</span>
          <div className="flex gap-[6px] items-center">
            <img
              className="w-[12px] h-[12px]"
              src={type === "Movie" ? Movies : TV}
              alt={type}
            />
            <span>{type}</span>
          </div>
          <span>•</span>
          <span>{rating}</span>
        </div>
        <span className="text-lg font-semibold">{title}</span>
      </div>

      <div className="absolute opacity-0 w-[117px] h-[48px] rounded-[28px] bg-[#ffffff30] flex items-center justify-between py-[10px] pl-[10px] pr-[24px] group-hover:opacity-100">
        <img src={Play} />
        <span>PLAY</span>
      </div>
    </div>
  );
}

export default Movie;
