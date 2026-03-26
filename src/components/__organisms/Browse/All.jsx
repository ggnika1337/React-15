import React from "react";
import data from "../../../../data.json";
import Movie from "../../__atoms/Movie/Movie";

function All({ AllDisplay }) {
  let filtered = data.filter((el) => {
    return el.isTrending === true;
  });
  console.log(filtered);
  return (
    <div className={`text-white ${AllDisplay} flex-col`}>
      <div className="flex flex-col gap-[25px]">
        <h1 className="text-[32px] font-[400] text-white">Trending</h1>
        <div className="flex gap-4 overflow-x-auto w-full pb-2 scrollbar-hide">
          {filtered.map((el, key) => (
            <Movie
              key={key}
              title={el.title}
              year={el.year}
              type={el.category}
              rating={el.rating}
              image={el.thumbnail.regular.large}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[25px]">
        <h1 className="text-[32px] font-[400] text-white">
          Recommended for you
        </h1>
        <div className="text-white h-[300px] w-[300px]"></div>
      </div>
    </div>
  );
}

export default All;
