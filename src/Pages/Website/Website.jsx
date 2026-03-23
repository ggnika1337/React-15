import { useState } from "react";
import Bar from "../../components/__molecules/Bar/Bar";
import All from "../../components/__organisms/Browse/All";
import Favourites from "../../components/__organisms/Browse/Favourites";
import Movies from "../../components/__organisms/Browse/Movies";
import TVShows from "../../components/__organisms/Browse/TVShows";

function Website() {
  const [all, setAll] = useState("flex");
  const [movies, setMovies] = useState("hidden");
  const [tv, setTV] = useState("hidden");
  const [favourites, setFavourites] = useState("hidden");

  return (
    <>
      <div className="flex gap-[36px]">
        <Bar
          onAllClick={() => {
            setAll("flex");
            setMovies("hidden");
            setTV("hidden");
            setFavourites("hidden");
          }}
          onMoviesClick={() => {
            setAll("hidden");
            setMovies("flex");
            setTV("hidden");
            setFavourites("hidden");
          }}
          onTVClick={() => {
            setAll("hidden");
            setMovies("hidden");
            setTV("flex");
            setFavourites("hidden");
          }}
          onFavouritesClick={() => {
            setAll("hidden");
            setMovies("hidden");
            setTV("hidden");
            setFavourites("flex");
          }}
        />
        <All AllDisplay={all} />
        <Movies MoviesDisplay={movies} />
        <TVShows TVDisplay={tv} />
        <Favourites FavouritesDisplay={favourites} />
      </div>
    </>
  );
}

export default Website;
