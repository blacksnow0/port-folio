import Typewriter from "typewriter-effect";
import React from "react";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Software Developer", "Freelancer", "MERN Stack Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    ></Typewriter>
  );
}

export default Type;
