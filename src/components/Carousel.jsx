import React, { useState, useEffect } from "react";

import { useSpring, useSprings, animated, config } from "react-spring";
import { useDrag } from "react-use-gesture";
import clamp from "lodash-es/clamp";

const Carousel = ({ slides }) => {
  const [select, setSelect] = useState(0);
  const [stopCarousel, setStopCarousel] = useState(false);

  const nextSlide = () => {
    setSelect(select + 1 < slides.length ? select + 1 : select);
  };
  const backSlide = () => {
    setSelect(select - 1 >= 0 ? select - 1 : select);
  };
  let carouselStart;
  const setStopCarouselTime = () => {
    setStopCarousel(true);
    clearTimeout(carouselStart);
    // Cuando el usuarios interactue por primera vez
    // El carousel debe parar
    // El problema es que no basta con parar el estado
    // Pues el timeOut del carousel fue encendido
    // Entonces si bien el carousel parará
    // El último Slide determinado por el TimeOut ocurrirá
    // Por eso se debe limpiar el TimeOut
  };
  useEffect(() => {
    if (!stopCarousel) {
      carouselStart = setTimeout(() => {
        setSelect(select + 1 < slides.length ? select + 1 : 0);
      }, 7500);
    }
  }, [select, stopCarousel]);

  return (
    <div
      className="Carousel"
      //   style={{
      //     width: `${100 * slides.length}%`,
      //   }}
    >
      <div className="Slides">
        {slides.map(({ img, title, description }, i) => {
          return (
            <Slide
              index={i}
              isSelect={select === i}
              nextSlide={nextSlide}
              backSlide={backSlide}
              key={i}
              data={{ img, title, description }}
              setStopCarousel={setStopCarouselTime}
            />
          );
        })}
      </div>
      <div className="Steps">
        {slides.map((e, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                setSelect(i);
                setStopCarouselTime();
              }}
              style={{ width: `${100 / slides.length - 5}%` }}
              //El ancho depende del número de Slides, y el "-5" es simplemente para dar espacio entre steps
              className={`step ${select === i ? "select" : ""}`}
            ></div>
          );
        })}
      </div>
      <style jsx="true" global="true">{`
        * {
          transition: none;
        }
      `}</style>
    </div>
  );
};

const Slide = ({
  style,
  data,
  nextSlide,
  backSlide,
  isSelect,
  setStopCarousel,
}) => {
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
  }));

  const bind = useDrag(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8);
    set({
      xy: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    });
    if (down) {
      setStopCarousel();
    }
    if (!down) {
      if (delta[0] > 70) {
        backSlide();
      }
      if (delta[0] < -70) {
        nextSlide();
      }
    }
  });
  const interp = (i) => (r) =>
    `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

  const { radians } = useSpring({
    to: async (next) => {
      for (let index = 0; index < 100; index++) {
        await next({ radians: 2 * Math.PI });
      }
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  });
  const opacity = useSpring({
    opacity: isSelect ? 1 : 0,
  });
  // opacity.AnimatedValue.setValue({ opacity: 0.5 })
  // console.log(opacity)
  return (
    <animated.div
      draggable="false"
      className={`Slide ${isSelect ? "select" : ""}`}
      style={{
        display: isSelect ? "flex" : "none",
        transform: xy.interpolate((x, y) => {
          return `translate3d(${x}px,${0}px,0)`;
        }),
        opacity: xy.interpolate((x) => {
          let opa = 1 - Math.abs(x) * 0.006;
          return opa > 0 ? opa : 0;
        }),
        // ...opacity,
      }}
      {...bind()}
    >
      <animated.img
        style={{
          transform: radians.interpolate(interp(0)),
        }}
        draggable="false"
        src={data.img}
        className="img"
        alt={data.title}
      />
      <div className="text">
        <h2 className="title" draggable="false">
          {data.title}
        </h2>
        <h4 className="description" draggable="false">
          {data.description}
        </h4>
      </div>
    </animated.div>
  );
};
export default Carousel;
