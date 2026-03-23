import React from "react";

function Movie({ title, year, type, rating }) {
  return (
    <>
      <div className="relative rounded-[8px] w-[470px] h-[230px]">
        <div className="absolute left-[24px] bottom-[24px]">
          <div className="flex gap-[20px]">
            <span>{year}</span>
            <span>{type}</span>
            <span>{rating}</span>
          </div>
          <span>{title}</span>
        </div>
      </div>
    </>
  );
}

export default Movie;
