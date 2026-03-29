import React, { useState } from "react";
import data from "../../../../data.json";
import Movie from "../../__atoms/Movie/Movie";
import Search from "../../__atoms/Search/Search";

function All({ AllDisplay }) {
  let filtered = data.filter((el) => {
    return el.isTrending === true;
  });
  const [search, setSearch] = useState("");
  let searched = data.filter((el) => el.title.includes(search));

  return (
    <div
      className={`text-white pb-[50px] w-full ${AllDisplay} flex-col gap-[40px]`}
    >
      <Search
        onSubmit={(e) => {
          e.preventDefault();
          console.log(searched);
          setEntered(true);
        }}
        onChange={(e) => {
          setSearch(e.target.value);
          console.log(search);
        }}
        placeholder={"Search for movies or TV series"}
      />
      <div
        style={{ display: search === "" ? "flex" : "none" }}
        className="flex flex-col gap-[25px]"
      >
        <h1 className="text-[32px] font-[400] text-white">Trending</h1>
        <div className="flex gap-4 overflow-x-auto w-full pb-2 shrink-0">
          {filtered.map((el, key) => (
            <Movie
              key={key}
              title={el.title}
              year={el.year}
              type={el.category}
              rating={el.rating}
              image={el.thumbnail.regular.large}
              scroll={true}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col pr-[120px]">
        <h1
          style={{ display: search === "" ? "flex" : "none" }}
          className="text-[32px] font-[400] text-white"
        >
          Recommended for you
        </h1>
        <h1
          className="font-[400] text-[32px]"
          style={{ display: search === "" ? "none" : "block" }}
        >
          Found {searched.length} results for ‘{search}’
        </h1>
        <div className="text-white flex flex-wrap gap-[20px] w-full">
          {searched.map((el, key) => {
            return (
              <Movie
                key={key}
                title={el.title}
                year={el.year}
                type={el.category}
                rating={el.rating}
                image={el.thumbnail.regular.large}
                scroll={false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default All;
