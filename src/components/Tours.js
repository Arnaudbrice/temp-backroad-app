import React from "react";
// import { v4 as uuidv4 } from "uuid";
import Title from "./Title";
import { tours } from "../data.js";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title firstWord="featured" secondWord="tours" />

      <div className="section-center featured-center">
        {tours.map(tour => {
          const { id, img, date, title, info, location, duration, cost } = tour;
          return (
            <Tour
              key={id}
              img={img}
              date={date}
              title={title}
              info={info}
              location={location}
              duration={duration}
              cost={cost}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
