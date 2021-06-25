import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Footer.css";
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
function Footer() {
  return (
<div>
  <div className="container-fluid p" style={{backgroundColor: "rgb(243, 247, 247)", zIndex: 11, height: '71vh'}}> </div>
  <div className="container-fluid q" style={{backgroundColor: "rgb(243, 247, 247)", zIndex: 11, height: '1.5vh'}} > </div>

    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Help And Support</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Trust And Safety</a>
                </li>
                <li>
                  <a href="#">Jobindeed Foundation</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Term Of Services</h4>
              <ul>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">Accesseblity</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <AndroidIcon />
                </a>
                <a href="#">
                  <AppleIcon />
                </a>
                <a href="#">
                  <InstagramIcon />
                </a>
                <a href="#">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
          </div>
      </footer>
    </div>
    </div>
   
   
  );
}

export default Footer;
