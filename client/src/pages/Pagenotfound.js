import React from "react";
import Layout from "../components/Layout/Layout";
import { ReactComponent as ImageNotFound } from "../assets/NotFoundImage.svg";
import { Link } from "react-router-dom";

export default function Pagenotfound() {
  return (
    <Layout>
      <ImageNotFound className="not-found-img" />
      <a href="https://storyset.com/web">Web illustrations by Storyset</a>
      <Link className="btn btn-primary btn-lg my-3" to="/">
        Go back 🏃💨
      </Link>
    </Layout>
  );
}
