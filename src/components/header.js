import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/magnific-popup.css";
import "../css/responsive.css";
import "../css/slick.css";
import "../css/style.css";
// import "../css/css-1.css";
// import "../css/css2.css";
import Logo from "../images/logo.png";

const Header = () => {
  const logout = () => {
    localStorage.clear();
    //   navigate("/home");
  };
  const [data, setData] = useState([]);

  const getProduct = () => {
    Axios.get("https://testapi.demo-nexevo.in/api/products/view/all").then(
      (response) => {
        setData(response.data.data.data);
      }
    );
  };

  useEffect(() => {
    getProduct();
  }, [true]);

  if (localStorage.getItem("access_token") == null) {
    var menu = (
      <>
        <li className="cart">
          <Link to="Register">
            <i className="far fa-suitcase"></i>
            <div className="cart_text">Register</div>
          </Link>
        </li>
        <li className="cart">
          <Link to="Login">
            <i className="far fa-lock"></i>
            <div className="cart_text">Login </div>
          </Link>
        </li>
      </>
    );
  } else {
    var menu = (
      <>
        <li className="cart">
          <Link to="Account">
            <i className="far fa-user"></i>
            <div className="cart_text"> My Account </div>
          </Link>
        </li>
        <li className="cart">
          <Link to="Logout">
            <i className="far fa-logout"></i>
            <div className="cart_text"> Logout </div>
          </Link>
        </li>
      </>
    );
  }

  return (
    <>
      <header className="header">
        <div className="topbar">
          <div className="container-fluid">
            <div className="inner">
              <div className="logo">
                <Link to="Home">
                  <img src={Logo} className="image-fit" alt="logo" />
                </Link>
              </div>
              <div className="search-form">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      name="#"
                      className="form-control"
                      placeholder="Search for products..."
                      required=""
                    />
                    <div className="input-group-append input-group-text">
                      <button type="submit">
                        <i className="fal fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="header_action">
                <ul>
                  <li className="cart">
                    <Link to="cart">
                      <span className="cart_value">0</span>
                      <i className="far fa-shopping-cart"></i>
                      <div className="cart_text">My Cart</div>
                    </Link>
                  </li>
                  {menu}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="main_navigation hide_cat">
        <div className="container-fluid">
          <div className="row">
            <div class="col-lg-3 col-6">
              <div class="main-collapse-wrap custom-accordion">
                <button type="button">All Category</button>
                <div id="cataccordion" class="accordion_wrap accordion">
                  <div class="card accordion-item">
                    <div class="card-header accordion-header">
                      <button
                        class="btn btn-link accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#catOne"
                      >
                        <i class="fal fa-heart"></i>
                        Chair
                      </button>
                    </div>
                    <div
                      id="catOne"
                      class="accordion-collapse collapse show"
                      data-bs-parent="#cataccordion"
                    >
                      <div class="card-body accordion-body">
                        <ul class="sub-category">
                          <li>
                            <a href="#">Category 1</a>
                          </li>
                          <li>
                            <a href="#">Category 2</a>
                          </li>
                          <li>
                            <a href="#">Category 3</a>
                          </li>
                          <li>
                            <a href="#">Category 4</a>
                          </li>
                          <li>
                            <a href="#">Category 5</a>
                          </li>
                          <li>
                            <a href="#">Category 6</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="card accordion-item">
                    <div class="card-header accordion-header">
                      <button
                        class="btn btn-link accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#catTwo"
                      >
                        <i class="fal fa-heart"></i>
                        Sofa
                      </button>
                    </div>
                    <div
                      id="catTwo"
                      class="accordion-collapse collapse"
                      data-bs-parent="#cataccordion"
                    >
                      <div class="card-body accordion-body">
                        <ul class="sub-category">
                          <li>
                            <a href="#">Category 1</a>
                          </li>
                          <li>
                            <a href="#">Category 2</a>
                          </li>
                          <li>
                            <a href="#">Category 3</a>
                          </li>
                          <li>
                            <a href="#">Category 4</a>
                          </li>
                          <li>
                            <a href="#">Category 5</a>
                          </li>
                          <li>
                            <a href="#">Category 6</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="card accordion-item">
                    <div class="card-header accordion-header">
                      <button
                        class="btn btn-link accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#catThree"
                      >
                        <i class="fal fa-heart"></i>
                        Table Lamp
                      </button>
                    </div>
                    <div
                      id="catThree"
                      class="accordion-collapse collapse"
                      data-bs-parent="#cataccordion"
                    >
                      <div class="card-body accordion-body">
                        <ul class="sub-category">
                          <li>
                            <a href="#">Category 1</a>
                          </li>
                          <li>
                            <a href="#">Category 2</a>
                          </li>
                          <li>
                            <a href="#">Category 3</a>
                          </li>
                          <li>
                            <a href="#">Category 4</a>
                          </li>
                          <li>
                            <a href="#">Category 5</a>
                          </li>
                          <li>
                            <a href="#">Category 6</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="card accordion-item">
                    <div class="card-header accordion-header">
                      <button
                        class="btn btn-link accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#catFour"
                      >
                        <i class="fal fa-heart"></i>
                        Tables
                      </button>
                    </div>
                    <div
                      id="catFour"
                      class="accordion-collapse collapse"
                      data-bs-parent="#cataccordion"
                    >
                      <div class="card-body accordion-body">
                        <ul class="sub-category">
                          <li>
                            <a href="#">Category 1</a>
                          </li>
                          <li>
                            <a href="#">Category 2</a>
                          </li>
                          <li>
                            <a href="#">Category 3</a>
                          </li>
                          <li>
                            <a href="#">Category 4</a>
                          </li>
                          <li>
                            <a href="#">Category 5</a>
                          </li>
                          <li>
                            <a href="#">Category 6</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="card accordion-item">
                    <div class="card-header accordion-header">
                      <button
                        class="btn btn-link accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#catFive"
                      >
                        <i class="fal fa-heart"></i>
                        Swing
                      </button>
                    </div>
                    <div
                      id="catFive"
                      class="accordion-collapse collapse"
                      data-bs-parent="#cataccordion"
                    >
                      <div class="card-body accordion-body">
                        <ul class="sub-category">
                          <li>
                            <a href="#">Category 1</a>
                          </li>
                          <li>
                            <a href="#">Category 2</a>
                          </li>
                          <li>
                            <a href="#">Category 3</a>
                          </li>
                          <li>
                            <a href="#">Category 4</a>
                          </li>
                          <li>
                            <a href="#">Category 5</a>
                          </li>
                          <li>
                            <a href="#">Category 6</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="card accordion-item">
                    <div class="card-header accordion-header">
                      <button
                        class="btn btn-link accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#catSix"
                      >
                        <i class="fal fa-heart"></i>
                        Cabinets
                      </button>
                    </div>
                    <div
                      id="catSix"
                      class="accordion-collapse collapse"
                      data-bs-parent="#cataccordion"
                    >
                      <div class="card-body accordion-body">
                        <ul class="sub-category">
                          <li>
                            <a href="#">Category 1</a>
                          </li>
                          <li>
                            <a href="#">Category 2</a>
                          </li>
                          <li>
                            <a href="#">Category 3</a>
                          </li>
                          <li>
                            <a href="#">Category 4</a>
                          </li>
                          <li>
                            <a href="#">Category 5</a>
                          </li>
                          <li>
                            <a href="#">Category 6</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-6">
              <div className="nav_inner">
                <ul className="main-menu">
                  <li className="menu-item">
                    <Link to="Home" className="active">
                      Home
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="About">About Us</Link>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <Link to="#">Blog</Link>
                    <ul className="sub-menu custom">
                      <li className="menu-item">
                        <Link to="Blog">Blog Grid</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="BlogDetails">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <Link to="#">Pages</Link>
                    <ul className="sub-menu custom">
                      <li className="menu-item menu-item-has-children">
                        <Link to="#">Account</Link>
                        <ul className="sub-menu custom">
                          <li className="menu-item">
                            <Link to="Account">My Account</Link>
                          </li>
                          <li className="menu-item">
                            <Link to="Payment">Payment</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <Link to="Faq">Faq's</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="terms">Terms &amp; Con.</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <Link to="#">Shop</Link>
                    <ul className="sub-menu custom">
                      <li className="menu-item">
                        <Link to="Legrand">Shop</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="shop-details.html">Shop Details</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="wishlist.html">Wishlist</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="cart.html">Cart</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="checkout.html">Checkout</Link>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <Link to="#">Orders</Link>
                        <ul className="sub-menu custom">
                          <li className="menu-item">
                            <Link to="order-list.html">Order List</Link>
                          </li>
                          <li className="menu-item">
                            <Link to="order-details.html">Order Details</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link to="contact">Contact</Link>
                  </li>
                </ul>
                <div className="hamburger">
                  <div className="hamburger_btn">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
