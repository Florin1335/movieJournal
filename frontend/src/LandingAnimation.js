import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import useResizeAware from "react-resize-aware";

export default function LandingAnimation() {
  const [display, setDisplay] = useState(true);
  const [resizeListenerTop, sizesTop] = useResizeAware();
  const [resizeListenerLeft, sizesLeft] = useResizeAware();

  const topStyles = useSpring({
    from: { y: 0 },
    to: { y: -sizesTop.height },
    delay: 2000,
    config: { friction: 1000, tension: 300 },
  });
  const leftStyles = useSpring({
    from: { x: 0 },
    to: { x: -sizesLeft.width },
    delay: 1000,
    config: { friction: 500, tension: 500 },
  });
  const rightStyles = useSpring({
    from: { x: 0 },
    to: { x: sizesLeft.width },
    delay: 1000,
    config: { friction: 500, tension: 500 },
  });

  useEffect(() => {
    let TimeoutDisplay = setTimeout(() => {
      setDisplay(false);
    }, 5000);
    return () => {
      clearTimeout(TimeoutDisplay);
    };
  }, []);
  return (
    <div
      className={`${display ? "fixed-top" : "d-none"} min-vh-100 min-vw-100`}
    >
      <div style={{ position: "relative" }}>
        {resizeListenerTop}
        <animated.img
          className="img-fluid"
          src="/images/curtains.png"
          style={{ zIndex: "10000", ...topStyles }}
          alt="top"
        ></animated.img>
      </div>
      <div
        className="row g-0 w-100 h-100"
        style={{ position: "absolute", top: 0, zIndex: "-10000" }}
      >
        <animated.div
          className="col-6"
          id="divLeft"
          style={{ position: "relative", ...leftStyles }}
        >
          {resizeListenerLeft}
        </animated.div>
        <animated.div
          className="col-6"
          id="divRight"
          style={{ ...rightStyles }}
        ></animated.div>
      </div>
    </div>
  );
}
