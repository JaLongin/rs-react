import Card from "../components/Card";
import React from "react";
import car from "../assets/car.jpg";
function Home() {
  return (
    <>
      <h1>Hello World, biii</h1>
      <Card imgSrc={car} name="car" desc="woo-hoo" />
    </>
  );
}

export default Home;
