import React from "react";
import Layout from "../components/Layout/Layout";
import { ReactComponent as ImageContactUs } from "../assets/ContactUs.svg";

import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

export default function Contact() {
  return (
    <Layout>
      <div className="row contact-us ">
        <div className="col-md-6 ">
          <ImageContactUs className="img-contact-us" />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@shortingecommerce.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 0XX-XXXXXXXX
          </p>
          <p className="mt-3">
            <BiSupport /> : XXXX-XXXX-XXXX (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
}
