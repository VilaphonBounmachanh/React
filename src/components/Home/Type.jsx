import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Mr.Vilaphon Bounmachanh",
              "Full Stack Developer",
              "Passionate Blockchain Enthusiast",
              "Effective Problem Solver"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type