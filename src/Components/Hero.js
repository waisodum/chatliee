import React, { useEffect } from "react";
import "../Styles/hero.css";
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useEffect(() => {
    // gsap.set('.card', {
    //     scale: 0.9,
    //     opacity: 0
    // })

    const t = gsap.timeline();

    t.to(".arrow", {
      x: 10,
      duration: 1,
      ease: "power3.out",
    });

    const pinTrigger = ScrollTrigger.create({
      trigger: ".hero-main",
      pin: false,
      markers: true,
      start: "top 10%",
      end: "bottom 10%",
    });

    const ts = gsap.timeline();

    ts.from(".card", {
      scrollTrigger: {
        trigger: ".hero-main",
        start: pinTrigger?.start,
        end: pinTrigger?.end,
        scrub: 1,
        ease: "power3.inOut",
      },
      duration: 1,
      scale: 0.9,
      opacity: 0,
    });

    ts.to(".card", {
      scrollTrigger: {
        trigger: ".hero-main",
        start: pinTrigger?.start,
        end: pinTrigger?.end,
        scrub: 1,
        ease: "power3.inOut",
      },
      duration: 1,
      scale: 1.5,
      opacity: 1,
    });

    return () => {
      pinTrigger.kill();
      ts.kill();
    };
  }, []);

  return (
    <>
      <div className="hero-main">
        <div className="hero-inner card">
          <p className="mr-[0.5vw]">Get your personalised Recommendations</p>{" "}
          <FaArrowRight className="arrow" />
        </div>

        <div className="hero-inner2 card">
          <p className="mr-[0.5vw]">Try new recipies</p>{" "}
          <FaArrowRight className="arrow" />
        </div>
      </div>
    </>
  );
}

export default Hero;
