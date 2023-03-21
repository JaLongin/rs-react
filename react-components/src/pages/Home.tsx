import React from "react";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import car from "../assets/images/car.jpg";
import train from "../assets/images/train.jpg";
function Home() {
  return (
    <>
      <SearchBar />
      <div className="card-wrap">
        <Card imgSrc={car} name="car" desc="woo-hoo" />
        <Card imgSrc={train} name="not a car" desc="still woo-hoo" />
        <Card imgSrc={car} name="car" desc="woo-hoo" />
        <Card imgSrc={train} name="not a car" desc="still woo-hoo" />
        <Card imgSrc={car} name="car" desc="woo-hoo" />
        <Card imgSrc={train} name="not a car" desc="still woo-hoo" />
        <Card imgSrc={car} name="car" desc="woo-hoo" />
        <Card imgSrc={train} name="not a car" desc="still woo-hoo" />
        <Card imgSrc={car} name="car" desc="woo-hoo" />
        <Card imgSrc={train} name="not a car" desc="still woo-hoo" />
      </div>
    </>
  );
}

export default Home;
