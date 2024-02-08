import React from "react";

import Title from "./Title";
import { services } from "../data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title firstWord="Our" secondWord="Services" />
      <div className="section-center services-center">
        {services.map(service => {
          // const { id, icon, title, text } = service;
          // note: passing props from parent to child using spread operator
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
