import React, { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Page = ({ offset, gradient, onClick, text, src }) => {
  return (
    <>
      <ParallaxLayer
        className="d-flex justify-content-center align-items-center"
        offset={offset}
        speed={0.2}
        onClick={onClick}
      >
        <div className="slopeBegin" />
      </ParallaxLayer>

      <ParallaxLayer
        className="d-flex justify-content-center align-items-center"
        offset={offset}
        speed={1}
        onClick={onClick}
      >
        <div className={"slopeEnd " + gradient} />
      </ParallaxLayer>

      <ParallaxLayer
        className="d-flex justify-content-center align-items-center"
        offset={offset}
        speed={0.3}
        onClick={onClick}
      >
        <span className="parallaxSpan h-100 w-100 d-flex flex-column justify-content-between">
          <p className="display-3 fw-bold text-center pt-5 ps-4 pe-4">{text}</p>
          <img src={src} alt="img" className="img-fluid"></img>
          <div
            className="w-100 d-flex flex-row justify-content-center"
            style={{ position: "absolute" }}
          >
            <div className={offset === 0 ? "circle-active" : "circle"}></div>
            <div className={offset === 1 ? "circle-active" : "circle"}></div>
            <div className={offset === 2 ? "circle-active" : "circle"}></div>
          </div>
        </span>
      </ParallaxLayer>
    </>
  );
};

export default function LandingPage() {
  const divRef = useRef();
  const parallaxRef = useRef();

  useEffect(() => {
    let timeout = setTimeout(() => {
      divRef.current.scrollIntoView({ behaviour: "smooth" });
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const scroll = (number) => {
    if (parallaxRef.current) parallaxRef.current.scrollTo(number);
  };

  return (
    <div
      ref={divRef}
      style={{ position: "relative", height: "100vh", cursor: "pointer" }}
    >
      <Parallax enabled={false} ref={parallaxRef} pages={3} horizontal>
        <Page
          offset={0}
          gradient="tomato"
          onClick={() => scroll(1)}
          text="Search and discover new movies"
          src="/images/got.png"
        ></Page>
        <Page
          offset={1}
          gradient="teal"
          onClick={() => scroll(2)}
          text="Add your favorite movies to the wishlist"
          src="/images/twd.png"
        ></Page>
        <Page
          offset={2}
          gradient="pink"
          onClick={() => scroll(0)}
          text="Keep track of watched movies"
          src="/images/avengers.png"
        ></Page>
      </Parallax>
    </div>
  );
}
