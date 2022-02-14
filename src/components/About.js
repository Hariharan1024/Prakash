import React from "react";
import image from "../images/banner/6.jpg";
import banner from "../images/banner/4.jpg";
import Pic from "../images/banner/5.jpg";

const About = () => {
  return (
    <>
      <section class="section-padding">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="image mb-xl-30 text-center">
                <img src={image} class="img-fluid" alt="img" />
              </div>
            </div>
            <div class="col-md-6 mb-xl-30">
              <div class="section-header">
                <h3 class="title mb-4">
                  Contrary to popular belief, Lorem is not simply
                </h3>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. ,
                </p>
              </div>
              <ul class="about_list row">
                <li class="col-lg-4 col-sm-6">
                  <i class="fal fa-apple-alt"></i>
                  <h6 class="mb-0">Electronics</h6>
                </li>
                <li class="col-lg-4 col-sm-6">
                  <i class="fal fa-apple-alt"></i>
                  <h6 class="mb-0">Switches</h6>
                </li>
              </ul>
              <a href="About" class="thm-btn btn-rounded thm-bg-color-one">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding pt-0">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <div
                class="discount_box"
                style={{
                  backgroundImage: "url(" + banner + ")",
                  objectFit: "contain",
                }}
              >
                <div class="discount_text">
                  <h6 class="mb-0 subtitle">Discount 50%</h6>
                  <h4 class="title mb-2">Curabitur Non Sofa</h4>
                  <p class="mb-3">Lorem ipsum dolor sit amet, consectetur.</p>
                  <a
                    href="shop.html"
                    class="thm-btn btn-rounded thm-bg-color-one"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="discount_box"
                style={{
                  backgroundImage: "url(" + banner + ")",
                  objectFit: "contain",
                }}
              >
                <div class="discount_text">
                  <h6 class="mb-0 subtitle">Discount 30%</h6>
                  <h4 class="title mb-2">Crescent ArmChair</h4>
                  <p class="mb-3">Lorem ipsum dolor sit amet, consectetur.</p>
                  <a
                    href="shop.html"
                    class="thm-btn btn-rounded thm-bg-color-one"
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

export default About;
