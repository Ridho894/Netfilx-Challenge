import React from "react";

function Banner() {
  return (
    <main className="bg-[url('https://ozosoftindia.com/wp-content/uploads/2021/11/Netflix.jpg')] object-contain text-white bg-cover bg-center h-[448px] relative">
      <div className="ml-7 pt-[180px]">
        <h1 className="text-4xl font-semibold pb-2">Movie Name</h1>
        <div>
          <button className="btn">PLAY</button>
          <button className="btn">MY LIST</button>
        </div>
        <h1 className="w-96 pt-4 text-lg leading-6 truncate">
          This is a test description This is a test description This is a test
          description This is a test description This is a test description
        </h1>
      </div>
      <div className="h-28 rotate-180 to-transparent bg-gradient-to-b from-light absolute bottom-0 w-screen" />
    </main>
  );
}

export default Banner;
