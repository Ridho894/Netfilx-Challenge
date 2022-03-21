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
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <main
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      }}
      className={`object-contain text-white bg-cover bg-top min-h-screen relative`}
    >
      <div className="bg-black bg-opacity-60 flex flex-col justify-center h-screen">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-7xl font-semibold pb-3">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div>
            <button className="btn">PLAY</button>
            <button className="btn">MY LIST</button>
          </div>
          <h1 className="w-full max-w-xl mt-4 font-thin text-lg leading-loose antialiased tracking-wide">
            {truncate(movie?.overview, 160)}
          </h1>
        </div>
      </div>
      <div className="h-28 rotate-180 to-transparent bg-gradient-to-b from-light absolute bottom-0 w-screen" />
    </main>
  );
}

export default Banner;
