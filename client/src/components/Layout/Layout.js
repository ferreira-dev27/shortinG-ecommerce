import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div>
      <Header />
      <main
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
