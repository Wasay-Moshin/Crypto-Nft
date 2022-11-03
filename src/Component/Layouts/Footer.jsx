import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
            <AiOutlineInstagram size={"30px"} color={"white"} />
            &nbsp;&nbsp;&nbsp;
            <AiOutlineTwitter size={"25px"} color={"white"} />
            &nbsp;&nbsp;&nbsp;
            <BsDiscord size={"25px"} color={"white"} />
            &nbsp;&nbsp;&nbsp;
            <BsTelegram size={"25px"} color={"white"} />
            <div className="mt-3">
              <p>Copyright © 2022 Crypto.com. All rights reserved.</p>
            </div>
          </div>
          <div className="col-md-5  mt-5">
            <div className="help">
              <p>Help center</p>
              <p>Blog</p>
              <p>T&C</p>
              <p>Privacy Notice</p>
              <p>Cookies Preference</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
