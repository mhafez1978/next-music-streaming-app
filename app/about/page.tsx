import React from "react";
import Link from "next/link";
import Box from "../components/Box";
import { twMerge } from "tailwind-merge";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import Footer from "../components/Footer";
function About() {
  return (
    <>
      <Header />
      <h2 style={{ fontSize: "45px" }} className="ml-6 mb-2">
        About Mazika
      </h2>
      <p style={{ fontSize: "22px" }} className="ml-6 mb-2 font-medium">
        Thank you for using my Mazika music streaming app
      </p>
      <Footer />
    </>
  );
}

export default About;
