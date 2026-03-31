import React, { useState } from "react";
import data from "../../../../data.json";
import Movie from "../../__atoms/Movie/Movie";
import Search from "../../__atoms/Search/Search";

function Movies({ MoviesDisplay }) {
  const [search, setSearch] = useState("");
  let searched = data.filter(
    (el) => el.title.includes(search) && el.category === "Movie",
  );

  return (
    <div
      className={`text-white pb-[50px] w-full ${MoviesDisplay} flex-col gap-[30px]`}
    >
      <Search
        onSubmit={(e) => {
          e.preventDefault();
          setEntered(true);
        }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder={"Search for movies"}
      />

      <div className="flex flex-col">
        <h1
          style={{ display: search === "" ? "flex" : "none" }}
          className="text-[32px] font-[400] text-white"
        >
          Movies
        </h1>
        <h1
          className="font-[400] text-[32px]"
          style={{ display: search === "" ? "none" : "block" }}
        >
          Found {searched.length} results for ‘{search}’
        </h1>
        <div className="text-white flex flex-wrap gap-[20px] w-full max-md:justify-center">
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

export default Movies;
