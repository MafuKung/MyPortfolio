import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Science Graduate from Chulalongkorn University",
          "Full-Stack Developer | React | .NET | MongoDB",
          "Interned at Quantium Technology",
          "Passionate about building scalable web applications",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
