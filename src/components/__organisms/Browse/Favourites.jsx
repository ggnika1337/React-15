import React, { useEffect, useState } from "react";
import data from "../../../../data.json";
import Movie from "../../__atoms/Movie/Movie";
import Search from "../../__atoms/Search/Search";

function Favourites({ FavouritesDisplay }) {
  const [search, setSearch] = useState("");
  const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
  let searched = data.filter((el) => el.title.includes(favourites));

  let bookmarkedFilms = data.filter(
    (el) => favourites.includes(el.title) && el.category === "Movies",
  );

  let bookmarkedTVSeries = data.filter(
    (el) => favourites.includes(el.title) && el.category === "TV Series",
  );

  return (
    <div
      className={`text-white pb-[50px] w-full ${FavouritesDisplay} flex-col gap-[30px]`}
    >
      <Search
        onSubmit={(e) => {
          e.preventDefault();
          setEntered(true);
        }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder={"Search for Bookmarked"}
      />

      <div className="flex flex-col">
        <h1
          style={{ display: search === "" ? "flex" : "none" }}
          className="text-[32px] font-[400] text-white"
        >
          Bookmarked Movies
        </h1>
        <h1
          className="font-[400] text-[32px]"
          style={{ display: search === "" ? "none" : "block" }}
        >
          Found {searched.length} results for ‘{search}’
        </h1>
        <div className="text-white flex flex-wrap gap-[20px] w-full">
          {bookmarkedFilms.map((el, key) => {
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
      <div className="flex flex-col">
        <h1
          style={{ display: search === "" ? "flex" : "none" }}
          className="text-[32px] font-[400] text-white"
        >
          Bookmarked TV Series
        </h1>
        <h1
          className="font-[400] text-[32px]"
          style={{ display: search === "" ? "none" : "block" }}
        >
          Found {searched.length} results for ‘{search}’
        </h1>
        <div className="text-white flex flex-wrap gap-[20px] w-full">
          {bookmarkedTVSeries.map((el, key) => {
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

export default Favourites;
