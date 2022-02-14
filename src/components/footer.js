import React from "react";
import { Link } from "react-router-dom";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/magnific-popup.css";
import "../css/responsive.css";
import "../css/slick.css";
import "../css/style.css";
// import "../css/css-1.css";
// import "../css/css2.css";

const Footer = () => {
  return (
    <footer className="footer section-padding border-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-sm-4">
            <div className="ft_widget border-sm-0 pl-sm-0">
              <h6 className="ft_title">Got Question ?</h6>
              <ul className="ft_contact">
                <li>
                  <Link to="tel:+91 98765 43210">
                    <i className="fas fa-phone"></i>
                    +91 98765 43210
                  </Link>
                </li>
                <li>
                  <Link to="tel:+91 98765 43210">
                    <i className="fas fa-phone"></i>
                    +91 98765 43210
                  </Link>
                </li>
              </ul>
              <br />
              <p className="mb-3">
                Lorem Ipsum is simply Dummy text of the printing and typesetting
                Industry - 560043
              </p>
            </div>
          </div>
          <div className="col-xl-2 col-sm-4">
            <div className="ft_widget">
              <h6 className="ft_title"> Product Categories </h6>
              <ul className="ft_menu">
                <li>
                  <Link to="#"> Switches </Link>
                </li>
                <li>
                  <Link to="#"> MCB </Link>
                </li>
                <li>
                  <Link to="#"> Wires and Cables </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-4">
            <div className="ft_widget">
              <h6 className="ft_title"> Brands </h6>
              <ul className="ft_menu">
                <li>
                  <Link to="Legrand"> Legrand </Link>
                </li>
                <li>
                  <Link to="ABB"> ABB </Link>
                </li>
                <li>
                  <Link to="IndoAsian"> Indo Asian </Link>
                </li>
                <li>
                  <Link to="Schneider"> Schneider </Link>
                </li>
                <li>
                  <Link to="Hager"> Hager </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-4">
            <div className="ft_widget">
              <h6 className="ft_title"> Our Company </h6>
              <ul className="ft_menu">
                <li>
                  <Link to="Home">Home</Link>
                </li>

                <li>
                  <Link to="About">About us </Link>
                </li>
                <li>
                  <Link to="Blog">Blog</Link>
                </li>
                <li>
                  <Link to="Faq"> FAQ </Link>
                </li>
                <li>
                  <Link to="contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-sm-4">
            <div className="ft_widget">
              <h6 className="ft_title"> News Letter </h6>

              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  required=""
                />
                <button className="thm-btn1 thm-bg-color-one " type="submit">
                  Subscribe
                </button>
              </div>
              <br/>
              <p className="mb-2">Follow Us:</p>
              <ul className="ft_social">
                <li>
                  <Link to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container-fluid">
          <p className="mb-0">
            @ 2022
            <Link to="#" className="thm-color-one">
              Nexevo Technology.
            </Link>
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
