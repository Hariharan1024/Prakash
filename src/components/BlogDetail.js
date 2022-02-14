import React from "react";
import image from "../images/banner/3.jpg";
import image1 from "../images/banner/1.jpg";
import banner from "../images/banner/5.jpg";

const BlogDetails = () => {
  return (
    <section className="section-padding">
      <div className="container-fluid">
        <div className="section-header">
          <h3 className="title">Blog Details</h3>
          <p className="text">Lorem ipsum dolor sit amet, consectetur.</p>
        </div>

        <div className="flex-lg-row-reverse row">
          <aside className="col-lg-4">
            <div className="sidebar">
              <div className="sidebar_inner">
                <div className="sidebar_widget">
                  <h5 className="widget_title">Search</h5>
                  <form action="#" method="POST">
                    <div className="input-group">
                      <input
                        type="text"
                        name="#"
                        className="form-control form-control-custom"
                        placeholder="Search keywords..."
                        required=""
                      />
                      <div className="input-group-append">
                        <button type="submit">
                          <i className="fal fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="sidebar_widget">
                  <h5 className="widget_title">Category</h5>
                  <ul className="categories">
                    <li>
                      <a to="Blog">
                        All <span>(267)</span>
                      </a>
                    </li>
                    <li>
                      <a to="Blog">
                        Electronics <span>(50)</span>
                      </a>
                    </li>
                    <li>
                      <a to="Blog">
                        Switches <span>(78)</span>
                      </a>
                    </li>
                    <li>
                      <a to="Blog">
                        Cables <span>(95)</span>
                      </a>
                    </li>
                    <li>
                      <a to="Blog">
                        Wires <span>(15)</span>
                      </a>
                    </li>
                    <li>
                      <a to="Blog">
                        Kids <span>(65)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar_widget">
                  <h5 className="widget_title">Recent Post</h5>
                  <ul className="recent_post">
                    <li>
                      <div className="post_thumb">
                        <a to="blog-details.html">
                          <img src={image} className="image-fit" alt="img" />
                        </a>
                      </div>
                      <div className="post_caption">
                        <h6 className="post_title">
                          <a to="blog-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                        <p className="post_date">18 Oct 2021</p>
                      </div>
                    </li>

                    <li>
                      <div className="post_thumb">
                        <a to="blog-details.html">
                          <img src={image} className="image-fit" alt="img" />
                        </a>
                      </div>
                      <div className="post_caption">
                        <h6 className="post_title">
                          <a to="blog-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                        <p className="post_date">18 Oct 2021</p>
                      </div>
                    </li>

                    <li>
                      <div className="post_thumb">
                        <a to="blog-details.html">
                          <img src={image} className="image-fit" alt="img" />
                        </a>
                      </div>
                      <div className="post_caption">
                        <h6 className="post_title">
                          <a to="blog-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                        <p className="post_date">18 Oct 2021</p>
                      </div>
                    </li>

                    <li>
                      <div className="post_thumb">
                        <a to="blog-details.html">
                          <img src={image} className="image-fit" alt="img" />
                        </a>
                      </div>
                      <div className="post_caption">
                        <h6 className="post_title">
                          <a to="blog-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                        <p className="post_date">18 Oct 2021</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="sidebar_widget">
                  <h5 className="widget_title">Tags</h5>
                  <div className="tags_cloud">
                    <a to="Blog">All </a>
                    <a to="Blog">Electronics</a>
                    <a to="Blog">Wires</a>
                    <a to="Blog">Cables</a>
                    <a to="Blog">Switches</a>
                    <a to="Blog">Plug</a>
                    <a to="Blog">Wooden</a>
                    <a to="Blog">Machine</a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="col-lg-8">
            <article className="post post_details">
              <div className="post_image">
                <a to="blog-details.html">
                  <img src={image1} className="image-fit" alt="img" />
                </a>
                <a to="blog-details.html" className="post_date">
                  18 Oct
                </a>
              </div>

              <div className="post_caption">
                <ul className="post_meta">
                  <li>
                    <a to="Blog">
                      <i className="fal fa-user"></i>
                      Admin
                    </a>
                  </li>
                  <li>
                    <a to="Blog">
                      <i className="fal fa-comments"></i>
                      8.6k
                    </a>
                  </li>
                  <li>
                    <a to="Blog">
                      <i className="fal fa-eye"></i>
                      9.5k
                    </a>
                  </li>
                </ul>
                <h2 className="post_title">
                  <a to="blog-details.html">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </a>
                </h2>
                <p className="post_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p className="post_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>

                <blockquote
                  style={{
                    backgroundImage: "url(" + banner + ")",
                    objectFit: "contain",
                  }}
                >
                  <h4 className="quote_title">
                    Smashing Podcast Episode With Paul Boag What Is Conversion
                    Optimization Inspired Design Decisions
                  </h4>
                  <cite className="quote_author">Jhon Doe</cite>
                </blockquote>
                <p className="post_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p className="post_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <hr />

                <div className="post_tags_share">
                  <div className="post_tags">
                    <h6>Tags: </h6>
                    <div className="tags">
                      <a to="Blog">Switches</a>
                      <a to="Blog">Cables</a>
                      <a to="Blog">Wires</a>
                    </div>
                  </div>
                  <div className="post_share">
                    <h6>Share: </h6>
                    <ul className="social">
                      <li>
                        <a to="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a to="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a to="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="post_author">
                  <img src={image1} alt="img" class="image-fit" />
                  <div class="text">
                    <h5 class="mb-2">Jhon Deo</h5>
                    <p class="mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                    </p>
                    <ul class="social">
                      <li>
                        <a to="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a to="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a to="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="post_navigation">
                  <a to="BlogDetail" class="nav_item">
                    Previous
                  </a>
                  <a to="BlogDetail" class="nav_item">
                    Next
                  </a>
                </div>

                <div class="row">
                  <div class="col-12">
                    <h4>Customer Reviews (601)</h4>
                    <ul class="comments">
                      <li class="comment">
                        <span class="comment_rate">
                          4 <i class="fas fa-star"></i>
                        </span>
                        <p class="comment_text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries
                        </p>
                        <div class="customer_photos">
                          <div class="images">
                            <img
                              src={image1}
                              class="image-fit-contain"
                              alt="img"
                            />
                            <img
                              src={image1}
                              class="image-fit-contain"
                              alt="img"
                            />
                            <img
                              src={image1}
                              class="image-fit-contain"
                              alt="img"
                            />
                          </div>
                        </div>

                        <div class="comment_meta">
                          <ul class="comment_author">
                            <li>Jhon Deo</li>
                            <li>11 Oct 2021</li>
                          </ul>
                          <ul class="comment_action">
                            <li>
                              <button type="button">
                                <i class="fal fa-thumbs-up"></i>5
                              </button>
                            </li>
                            <li>
                              <button type="button">
                                <i class="fal fa-thumbs-down"></i>1
                              </button>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="comment">
                        <span class="comment_rate">
                          4 <i class="fas fa-star"></i>
                        </span>
                        <p class="comment_text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries
                        </p>
                        <div class="customer_photos">
                          <div class="images">
                            <img
                              src={image}
                              class="image-fit-contain"
                              alt="img"
                            />
                            <img
                              src={image}
                              class="image-fit-contain"
                              alt="img"
                            />
                          </div>
                        </div>
                        <div class="comment_meta">
                          <ul class="comment_author">
                            <li>Jhon Anderson</li>
                            <li>11 Oct 2021</li>
                          </ul>
                          <ul class="comment_action">
                            <li>
                              <button type="button">
                                <i class="fal fa-thumbs-up"></i>5
                              </button>
                            </li>
                            <li>
                              <button type="button">
                                <i class="fal fa-thumbs-down"></i>1
                              </button>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="comment_form">
                  <h4>Leave A Reply</h4>
                  <form>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            name="#"
                            placeholder="Your Full Name"
                            class="form-control form-control-custom"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="email"
                            name="#"
                            placeholder="Your Email"
                            class="form-control form-control-custom"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            rows="5"
                            name="#"
                            placeholder="Write Message"
                            class="form-control form-control-custom"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <button type="submit" class="thm-btn btn-rectangle">
                          Send Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
