import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import requests from "../api/requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  return (
    <main
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      }}
      className={`object-contain text-white bg-cover bg-top h-[448px] relative`}
    >
      <div className="ml-7 pt-[180px]">
        <h1 className="text-4xl font-semibold pb-3">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
          <button className="btn">PLAY</button>
          <button className="btn">MY LIST</button>
        </div>
        <h1 className="w-full max-w-xl mt-4 text-lg leading-loose antialiased tracking-wide">
          {movie?.overview.slice(0, 180)}...
        </h1>
      </div>
      <div className="h-28 rotate-180 to-transparent bg-gradient-to-b from-light absolute bottom-0 w-screen" />
    </main>
  );
}

export default Banner;
