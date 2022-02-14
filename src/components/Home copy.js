import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import banner from "../images/banner/4.jpg";
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
                  <Link
                    to="Cart"
                    className="thm-btn btn-rounded thm-bg-color-one"
                  >
                    Shop Now <i className="fal fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className="slide-item"
            style={{backgroundImage: "url(images/banner/2.jpg)"}}
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
                  <Link
                    to="Cart"
                    className="thm-btn btn-rounded thm-bg-color-one"
                  >
                    Shop Now <i className="fal fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div
            className="slide-item"
            style={{backgroundImage: "url(images/banner/3.jpg)"}}
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
                  <Link
                    to="Cart"
                    className="thm-btn btn-rounded thm-bg-color-one"
                  >
                    Shop Now <i className="fal fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div
            className="slide-item"
            style={{backgroundImage: "url(images/banner/4.jpg)"}}
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
                  <Link
                    to="Cart"
                    className="thm-btn btn-rounded thm-bg-color-one"
                  >
                    Shop Now <i className="fal fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div
            className="slide-item"
            style={{backgroundImage: "url(images/banner/5.jpg)"}}
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
                  <Link
                    to="Cart"
                    className="thm-btn btn-rounded thm-bg-color-one"
                  >
                    Shop Now <i className="fal fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
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

      <section class="section-padding pt-0">
        <div class="container-fluid">
          <div class="section-header">
            <h3 class="title">Chair</h3>
            <p class="text">Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div class="fruits-slider row slick-initialized slick-slider">
            <button
              class="slick-prev slick-arrow"
              aria-label="Previous"
              type="button"
              style=""
            >
              Previous
            </button>

            <div class="slick-list draggable">
              <div
                class="slick-track"
                style="opacity: 1; width: 6100px; transform: translate3d(-2440px, 0px, 0px);"
              >
                <div
                  class="slide-item px-3 slick-slide slick-cloned"
                  data-slick-index="-4"
                  id=""
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/12.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        Wing Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$55.00</span>
                      <span>$80.25</span>
                    </div>
                    <div class="product_qty">
                      <span>1</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="slide-item px-3 slick-slide slick-cloned"
                  data-slick-index="-3"
                  id=""
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/21.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        Wooden Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$96.00</span>
                      <span>$98.25</span>
                    </div>
                    <div class="product_qty">
                      <span>1</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div
                  class="slide-item px-3 slick-slide slick-cloned"
                  data-slick-index="-2"
                  id=""
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/31.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        Desk Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$41.00</span>
                      <span>$80.25</span>
                    </div>
                    <div class="product_qty">
                      <span>2</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide slick-cloned"
                  data-slick-index="-1"
                  id=""
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/41.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        Arm Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$74.00</span>
                      <span>$80.25</span>
                    </div>
                    <div class="product_qty">
                      <span>1</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide"
                  data-slick-index="0"
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/12.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        wing Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$55.00</span>
                      <span>$80.25</span>
                    </div>
                    <div class="product_qty">
                      <span>1</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide"
                  data-slick-index="1"
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/21.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        Wooden Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$96.00</span>
                      <span>$98.25</span>
                    </div>
                    <div class="product_qty">
                      <span>1</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide"
                  data-slick-index="2"
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/31.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        Desk Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$41.00</span>
                      <span>$80.25</span>
                    </div>
                    <div class="product_qty">
                      <span>2</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide"
                  data-slick-index="3"
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/41.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        Arm Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$74.00</span>
                      <span>$80.25</span>
                    </div>
                    <div class="product_qty">
                      <span>1</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide slick-current slick-active"
                  data-slick-index="4"
                  aria-hidden="false"
                  style="width: 305px;"
                  tabindex="0"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="0">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="0">
                        <img
                          src="assets/images/product/fruits/12.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="0">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="0">
                        Wing Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$55.00</span>
                      <span>$80.25</span>
                    </div>
                    <div class="product_qty">
                      <span>1</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="0">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="slide-item px-3 slick-slide slick-active"
                  data-slick-index="5"
                  aria-hidden="false"
                  style="width: 305px;"
                  tabindex="0"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="0">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="0">
                        <img
                          src="assets/images/product/fruits/21.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="0">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="0">
                        Wooden Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$96.00</span>
                      <span>$98.25</span>
                    </div>
                    <div class="product_qty">
                      <span>1</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="0">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide slick-active"
                  data-slick-index="6"
                  aria-hidden="false"
                  style="width: 305px;"
                  tabindex="0"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="0">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="0">
                        <img
                          src="assets/images/product/fruits/31.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="0">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="0">
                        Desk Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$41.00</span>
                      <span>$80.25</span>
                    </div>
                    <div class="product_qty">
                      <span>2</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="0">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide slick-active"
                  data-slick-index="7"
                  aria-hidden="false"
                  style="width: 305px;"
                  tabindex="0"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="0">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="0">
                        <img
                          src="assets/images/product/fruits/41.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="0">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="0">
                        Arm Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$74.00</span>
                      <span>$80.25</span>
                    </div>
                    <div class="product_qty">
                      <span>1</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="0">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide slick-cloned"
                  data-slick-index="8"
                  id=""
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/12.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        wing Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$55.00</span>
                      <span>$80.25</span>
                    </div>
                    <div class="product_qty">
                      <span>1</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide slick-cloned"
                  data-slick-index="9"
                  id=""
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/21.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        Wooden Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$96.00</span>
                      <span>$98.25</span>
                    </div>
                    <div class="product_qty">
                      <span>1</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide slick-cloned"
                  data-slick-index="10"
                  id=""
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/31.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        Desk Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$41.00</span>
                      <span>$80.25</span>
                    </div>
                    <div class="product_qty">
                      <span>2</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide slick-cloned"
                  data-slick-index="11"
                  id=""
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/41.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        Arm Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$74.00</span>
                      <span>$80.25</span>
                    </div>
                    <div class="product_qty">
                      <span>1</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide slick-cloned"
                  data-slick-index="12"
                  id=""
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/12.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        Wing Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$55.00</span>
                      <span>$80.25</span>
                    </div>
                    <div class="product_qty">
                      <span>1</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide slick-cloned"
                  data-slick-index="13"
                  id=""
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/21.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        Wooden Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$96.00</span>
                      <span>$98.25</span>
                    </div>
                    <div class="product_qty">
                      <span>1</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide slick-cloned"
                  data-slick-index="14"
                  id=""
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/31.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        Desk Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$41.00</span>
                      <span>$80.25</span>
                    </div>
                    <div class="product_qty">
                      <span>2</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  class="slide-item px-3 slick-slide slick-cloned"
                  data-slick-index="15"
                  id=""
                  aria-hidden="true"
                  style="width: 305px;"
                  tabindex="-1"
                >
                  <div class="product_block">
                    <div class="product_top">
                      <span class="product_tag">30% Off</span>
                      <button type="button" class="icon" tabindex="-1">
                        <i class="fal fa-heart"></i>
                      </button>
                    </div>
                    <div class="product_image">
                      <a href="shop-details.html" tabindex="-1">
                        <img
                          src="assets/images/product/fruits/41.png"
                          class="image-fit-contain"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div class="product_categories">
                      <a href="shop.html" tabindex="-1">
                        Chair
                      </a>
                    </div>
                    <h4 class="title">
                      <a href="shop-details.html" tabindex="-1">
                        Arm Chair
                      </a>
                    </h4>
                    <div class="price">
                      <span>$74.00</span>
                      <span>$80.25</span>
                    </div>
                    <div class="product_qty">
                      <span>1</span>PC
                    </div>
                    <div class="product_action">
                      <button type="button" class="product_btn" tabindex="-1">
                        ADD <i class="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <button
              class="slick-next slick-arrow"
              aria-label="Next"
              type="button"
              style=""
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* <section className="section-padding pt-0">
        <div className="container-fluid">
          <div className="section-header">
            <h3 className="title">Latest Products </h3>
          </div>

          <div className="fruits-slider row">
            <div className="col-lg-3 col-sm-6">
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
                        src="assets/images/product/fruits/12.png"
                        className="image-fit-contain"
                        alt="img"
                      />
                    </a>
                  </div>
                  <div className="product_categories">
                    <a href="shop.html">Chair</a>
                  </div>
                  <h4 className="title">
                    <a href="shop-details.html">wing Chair</a>
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

            <div className="col-lg-3 col-sm-6">
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
                        src="assets/images/product/fruits/21.png"
                        className="image-fit-contain"
                        alt="img"
                      />
                    </a>
                  </div>
                  <div className="product_categories">
                    <a href="shop.html">Chair</a>
                  </div>
                  <h4 className="title">
                    <a href="shop-details.html">Wooden Chair</a>
                  </h4>
                  <div className="price">
                    <span>$96.00</span>
                    <span>$98.25</span>
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

            <div className="col-lg-3 col-sm-6">
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
                        src="assets/images/product/fruits/31.png"
                        className="image-fit-contain"
                        alt="img"
                      />
                    </a>
                  </div>
                  <div className="product_categories">
                    <a href="shop.html">Chair</a>
                  </div>
                  <h4 className="title">
                    <a href="shop-details.html">Desk Chair</a>
                  </h4>
                  <div className="price">
                    <span>$41.00</span>
                    <span>$80.25</span>
                  </div>
                  <div className="product_qty">
                    <span>2</span>PC
                  </div>
                  <div className="product_action">
                    <button type="button" className="product_btn">
                      ADD <i className="fal fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
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
                        src="assets/images/product/fruits/41.png"
                        className="image-fit-contain"
                        alt="img"
                      />
                    </a>
                  </div>
                  <div className="product_categories">
                    <a href="shop.html">Chair</a>
                  </div>
                  <h4 className="title">
                    <a href="shop-details.html">Arm Chair</a>
                  </h4>
                  <div className="price">
                    <span>$74.00</span>
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
      </section> */}

      {/* <section className="section-padding pt-0">
        <div className="container-fluid">
          <div className="section-header">
            <h3 className="title"> Most Selled  </h3>
          </div>

          <div className="fruits-slider row">
            <div className="col-lg-3 col-sm-6">
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
                        src="assets/images/product/fruits/12.png"
                        className="image-fit-contain"
                        alt="img"
                      />
                    </a>
                  </div>
                  <div className="product_categories">
                    <a href="shop.html">Chair</a>
                  </div>
                  <h4 className="title">
                    <a href="shop-details.html">wing Chair</a>
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

            <div className="col-lg-3 col-sm-6">
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
                        src="assets/images/product/fruits/21.png"
                        className="image-fit-contain"
                        alt="img"
                      />
                    </a>
                  </div>
                  <div className="product_categories">
                    <a href="shop.html">Chair</a>
                  </div>
                  <h4 className="title">
                    <a href="shop-details.html">Wooden Chair</a>
                  </h4>
                  <div className="price">
                    <span>$96.00</span>
                    <span>$98.25</span>
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

            <div className="col-lg-3 col-sm-6">
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
                        src="assets/images/product/fruits/31.png"
                        className="image-fit-contain"
                        alt="img"
                      />
                    </a>
                  </div>
                  <div className="product_categories">
                    <a href="shop.html">Chair</a>
                  </div>
                  <h4 className="title">
                    <a href="shop-details.html">Desk Chair</a>
                  </h4>
                  <div className="price">
                    <span>$41.00</span>
                    <span>$80.25</span>
                  </div>
                  <div className="product_qty">
                    <span>2</span>PC
                  </div>
                  <div className="product_action">
                    <button type="button" className="product_btn">
                      ADD <i className="fal fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
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
                        src="assets/images/product/fruits/41.png"
                        className="image-fit-contain"
                        alt="img"
                      />
                    </a>
                  </div>
                  <div className="product_categories">
                    <a href="shop.html">Chair</a>
                  </div>
                  <h4 className="title">
                    <a href="shop-details.html">Arm Chair</a>
                  </h4>
                  <div className="price">
                    <span>$74.00</span>
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
      </section> */}
    </>
  );
};

export default Home;
