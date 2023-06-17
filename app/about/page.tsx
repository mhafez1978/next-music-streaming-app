import React from "react";
import Link from "next/link";
function About() {
  return (
    <div className="main">
      This is the About route
      <Link href="/">Home</Link>
    </div>
  );
}

export default About;
