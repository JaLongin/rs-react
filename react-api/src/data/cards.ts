import car from "../assets/images/car.jpg";
import train from "../assets/images/train.jpg";

interface Card {
  src: string;
  name: string;
  desc: string;
}

export const cards = [
  {
    src: car,
    name: "Car",
    desc: "Woo-hoo",
  },
  {
    src: train,
    name: "Train",
    desc: "Vroom-vroom",
  },
] as Array<Card>;
