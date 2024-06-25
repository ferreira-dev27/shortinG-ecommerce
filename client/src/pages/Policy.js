import React from "react";
import Layout from "../components/Layout/Layout";
import { ReactComponent as ImageAboutUs } from "../assets/AboutUs.svg";

export default function Policy() {
  return (
    <Layout>
      <div className="row about-us ">
        <div className="col-md-6 ">
          <ImageAboutUs className="img-about-us" />
        </div>
        <div className="col-md-4">
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </Layout>
  );
}
