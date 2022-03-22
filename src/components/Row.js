import React, { useEffect, useState } from "react";
import axios from "../api/axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <main className="text-white max-w-7xl mx-auto">
      <h1>{title}</h1>
      <section className="flex overflow-y-hidden overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`${
              isLargeRow && ""
            } max-h-24 object-contain mr-3 w-full transform duration-500 hover:scale-125 cursor-pointer`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </section>
    </main>
  );
}

export default Row;
