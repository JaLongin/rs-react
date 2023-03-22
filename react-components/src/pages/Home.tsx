import React from "react";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { cards } from "../assets/data/cards";

function Home() {
  return (
    <>
      <SearchBar />
      <div className="card-wrap">
        {...cards.map((card) => (
          <Card
            key={card.name}
            imgSrc={card.src}
            name={card.name}
            desc={card.desc}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
