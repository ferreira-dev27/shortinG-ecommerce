import React from "react";
import Layout from "../components/Layout/Layout";
import { ReactComponent as ImageAboutUs } from "../assets/AboutUs.svg";

export default function About() {
  return (
    <Layout>
      <div className="row about-us ">
        <div className="col-md-6 ">
          <ImageAboutUs className="img-about-us" />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
  );
}
