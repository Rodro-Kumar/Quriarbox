import React from "react";
import Nav from "./Component/Nav/Nav";
import Hero from "./Component/Hero/Hero";
import Service from "./Component/Service/Service";
import Fact from "./Component/Fact/Fact";
import Delivery from "./Component/Delivery/Delivery";
import Testimonial from "./Component/Testimonial/Testimonial";
import Form from "./Component/Form/Form";
import Info from "./Component/Info/Info";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Service />
      <Fact />
      <Delivery />
      <Testimonial />
      <Form />
      <Info />
      <Footer />
    </>
  );
}

export default App;
