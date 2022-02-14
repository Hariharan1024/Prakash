import React from "react";
import { Link } from "react-router-dom";
import banner from "../images/banner/4.jpg";
import image from "../images/banner/6.jpg";
import Pic from "../images/banner/5.jpg";

const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_slider">
          <div
            className="slide-item"
            style={{
              backgroundImage: "url(" + banner + ")",
              objectFit: "contain",
            }}
          >
            <div className="section-padding">
              <div className="container-fluid">
                <div className="banner_content">
                  <h1 className="title">
                    Contrary to popular belief, Lorem Ipsum is not simply
                  </h1>
                  <p className="text">
                    Sale Up To
                    <br />
                    <strong>80%</strong>
                    Off
                  </p>
                  <a
                    href="shop.html"
                    className="thm-btn btn-rounded thm-bg-color-one"
                  >
                    Shop Now <i className="fal fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="htw-block">
                <div className="icon">
                  <i className="fal fa-truck"></i>
                </div>
                <div className="text">
                  <h6 className="title">Free Shipping</h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="htw-block">
                <div className="icon">
                  <i className="fal fa-shopping-bag"></i>
                </div>
                <div className="text">
                  <h6 className="title">Secure Payment</h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="htw-block">
                <div className="icon">
                  <i className="fal fa-headphones-alt"></i>
                </div>
                <div className="text">
                  <h6 className="title">Great Support 24x7</h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="htw-block">
                <div className="icon">
                  <i className="fal fa-cube"></i>
                </div>
                <div className="text">
                  <h6 className="title">Money - Returns</h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-fluid">
          <div className="section-header">
            <h3 className="title"> Latest Products </h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="fruits-slider row">
                <div className="slide-item px-3">
                  <div className="product_block">
                    <div className="product_top">
                      <span className="product_tag">30% Off</span>
                      <button type="button" className="icon">
                        <i className="fal fa-heart"></i>
                      </button>
                    </div>
                    <div className="product_image">
                      <a href="shop-details.html">
                        <img
                          src={image}
                          className="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="product_categories">
                      <a href="shop.html"> Legrand </a>
                    </div>
                    <h4 className="title">
                      <a href="shop-details.html"> Switches </a>
                    </h4>
                    <div className="price">
                      <span>$55.00</span>
                      <span>$80.25</span>
                    </div>
                    <div className="product_qty">
                      <span>1</span>PC
                    </div>
                    <div className="product_action">
                      <button type="button" className="product_btn">
                        ADD <i className="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="fruits-slider row">
                <div className="slide-item px-3">
                  <div className="product_block">
                    <div className="product_top">
                      <span className="product_tag">30% Off</span>
                      <button type="button" className="icon">
                        <i className="fal fa-heart"></i>
                      </button>
                    </div>
                    <div className="product_image">
                      <a href="shop-details.html">
                        <img
                          src={image}
                          className="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="product_categories">
                      <a href="shop.html"> Legrand </a>
                    </div>
                    <h4 className="title">
                      <a href="shop-details.html"> Switches </a>
                    </h4>
                    <div className="price">
                      <span>$55.00</span>
                      <span>$80.25</span>
                    </div>
                    <div className="product_qty">
                      <span>1</span>PC
                    </div>
                    <div className="product_action">
                      <button type="button" className="product_btn">
                        ADD <i className="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="fruits-slider row">
                <div className="slide-item px-3">
                  <div className="product_block">
                    <div className="product_top">
                      <span className="product_tag">30% Off</span>
                      <button type="button" className="icon">
                        <i className="fal fa-heart"></i>
                      </button>
                    </div>
                    <div className="product_image">
                      <a href="shop-details.html">
                        <img
                          src={image}
                          className="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="product_categories">
                      <a href="shop.html"> Legrand </a>
                    </div>
                    <h4 className="title">
                      <a href="shop-details.html"> Switches </a>
                    </h4>
                    <div className="price">
                      <span>$55.00</span>
                      <span>$80.25</span>
                    </div>
                    <div className="product_qty">
                      <span>1</span>PC
                    </div>
                    <div className="product_action">
                      <button type="button" className="product_btn">
                        ADD <i className="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="fruits-slider row">
                <div className="slide-item px-3">
                  <div className="product_block">
                    <div className="product_top">
                      <span className="product_tag">30% Off</span>
                      <button type="button" className="icon">
                        <i className="fal fa-heart"></i>
                      </button>
                    </div>
                    <div className="product_image">
                      <a href="shop-details.html">
                        <img
                          src={image}
                          className="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="product_categories">
                      <a href="shop.html"> Legrand </a>
                    </div>
                    <h4 className="title">
                      <a href="shop-details.html"> Switches </a>
                    </h4>
                    <div className="price">
                      <span>$55.00</span>
                      <span>$80.25</span>
                    </div>
                    <div className="product_qty">
                      <span>1</span>PC
                    </div>
                    <div className="product_action">
                      <button type="button" className="product_btn">
                        ADD <i className="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="discount_box"
                style={{
                  backgroundImage: "url(" + banner + ")",
                  objectFit: "contain",
                }}
              >
                <div className="discount_text">
                  <h6 className="mb-0 subtitle">Discount 50%</h6>
                  <h4 className="title mb-2">Curabitur Non Sofa</h4>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                  <a
                    href="shop.html"
                    className="thm-btn btn-rounded thm-bg-color-one"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="discount_box"
                style={{
                  backgroundImage: "url(" + banner + ")",
                  objectFit: "contain",
                }}
              >
                <div className="discount_text">
                  <h6 className="mb-0 subtitle">Discount 30%</h6>
                  <h4 className="title mb-2">Crescent ArmChair</h4>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                  <a
                    href="shop.html"
                    className="thm-btn btn-rounded thm-bg-color-one"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-fluid">
          <div className="section-header">
            <h3 className="title"> Most Selled </h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="fruits-slider row">
                <div className="slide-item px-3">
                  <div className="product_block">
                    <div className="product_top">
                      <span className="product_tag">30% Off</span>
                      <button type="button" className="icon">
                        <i className="fal fa-heart"></i>
                      </button>
                    </div>
                    <div className="product_image">
                      <a href="shop-details.html">
                        <img
                          src={image}
                          className="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="product_categories">
                      <a href="shop.html"> Legrand </a>
                    </div>
                    <h4 className="title">
                      <a href="shop-details.html"> Switches </a>
                    </h4>
                    <div className="price">
                      <span>$55.00</span>
                      <span>$80.25</span>
                    </div>
                    <div className="product_qty">
                      <span>1</span>PC
                    </div>
                    <div className="product_action">
                      <button type="button" className="product_btn">
                        ADD <i className="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="fruits-slider row">
                <div className="slide-item px-3">
                  <div className="product_block">
                    <div className="product_top">
                      <span className="product_tag">30% Off</span>
                      <button type="button" className="icon">
                        <i className="fal fa-heart"></i>
                      </button>
                    </div>
                    <div className="product_image">
                      <a href="shop-details.html">
                        <img
                          src={image}
                          className="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="product_categories">
                      <a href="shop.html"> Legrand </a>
                    </div>
                    <h4 className="title">
                      <a href="shop-details.html"> Switches </a>
                    </h4>
                    <div className="price">
                      <span>$55.00</span>
                      <span>$80.25</span>
                    </div>
                    <div className="product_qty">
                      <span>1</span>PC
                    </div>
                    <div className="product_action">
                      <button type="button" className="product_btn">
                        ADD <i className="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="fruits-slider row">
                <div className="slide-item px-3">
                  <div className="product_block">
                    <div className="product_top">
                      <span className="product_tag">30% Off</span>
                      <button type="button" className="icon">
                        <i className="fal fa-heart"></i>
                      </button>
                    </div>
                    <div className="product_image">
                      <a href="shop-details.html">
                        <img
                          src={image}
                          className="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="product_categories">
                      <a href="shop.html"> Legrand </a>
                    </div>
                    <h4 className="title">
                      <a href="shop-details.html"> Switches </a>
                    </h4>
                    <div className="price">
                      <span>$55.00</span>
                      <span>$80.25</span>
                    </div>
                    <div className="product_qty">
                      <span>1</span>PC
                    </div>
                    <div className="product_action">
                      <button type="button" className="product_btn">
                        ADD <i className="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="fruits-slider row">
                <div className="slide-item px-3">
                  <div className="product_block">
                    <div className="product_top">
                      <span className="product_tag">30% Off</span>
                      <button type="button" className="icon">
                        <i className="fal fa-heart"></i>
                      </button>
                    </div>
                    <div className="product_image">
                      <a href="shop-details.html">
                        <img
                          src={image}
                          className="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="product_categories">
                      <a href="shop.html"> Legrand </a>
                    </div>
                    <h4 className="title">
                      <a href="shop-details.html"> Switches </a>
                    </h4>
                    <div className="price">
                      <span>$55.00</span>
                      <span>$80.25</span>
                    </div>
                    <div className="product_qty">
                      <span>1</span>PC
                    </div>
                    <div className="product_action">
                      <button type="button" className="product_btn">
                        ADD <i className="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-fluid">
          <div className="section-header">
            <h3 className="title"> Blog </h3>
          </div>
          <div className="testimonial-slider row">
            <div className="col-lg-6 col-sm-6">
              <div className="slide-item px-3">
                <div className="testimonial_block">
                  <div className="testimonial_image">
                    <img src={Pic} className="image-fit rounded-circle" alt="img" />
                  </div>
                  <div className="testimonial_comment">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                  <div className="testimonial_footer">
                    <div className="quote_icon">
                      <i className="fal fa-quote-left"></i>
                    </div>
                    <div className="testimonial_author">
                      <h5 className="name mb-0">Anna Wright</h5>
                      <p className="mb-0">CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="slide-item px-3">
                <div className="testimonial_block">
                  <div className="testimonial_image">
                    <img src={Pic} className="image-fit rounded-circle" alt="img" />
                  </div>
                  <div className="testimonial_comment">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                  <div className="testimonial_footer">
                    <div className="quote_icon">
                      <i className="fal fa-quote-left"></i>
                    </div>
                    <div className="testimonial_author">
                      <h5 className="name mb-0">Jhon Deo</h5>
                      <p className="mb-0">Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
