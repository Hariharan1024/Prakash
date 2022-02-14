import React from "react";

const Contact = () => {
  return (
    <>
      <div className="section-padding">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="contact_box">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <p className="text">
                  13th Street, 4th Main Road, Bangalore - 560020
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="contact_box">
                <div className="icon">
                  <i className="fas fa-phone"></i>
                </div>
                <a to="tel:(+347)1234567890" className="text">
                  (+91) 98765 43210
                </a>
                <p className="text">Mon-Sun 9:00am-10:00pm</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="contact_box">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <a to="mailto:example@example.com" className="text">
                  Prakesh@electrical.com
                </a>
                <p className="text">24 X 7 online support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section pt-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact_form">
                <h4 className="title">Get In Touch</h4>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-custom"
                          placeholder="Full Name"
                          required=""
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control form-control-custom"
                          placeholder="Email I'd"
                          required=""
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone"
                          className="form-control form-control-custom"
                          placeholder="Phone No."
                          required=""
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          className="form-control form-control-custom"
                          placeholder="Subject"
                          required=""
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          rows="8"
                          name="msg"
                          className="form-control form-control-custom"
                          placeholder="Message"
                          required=""
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="thm-btn btn-rectangle thm-bg-color-one w-100"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact_map">
                <div className="relative" id="map"></div>
                <ul className="contact_social">
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
                  <li>
                    <a to="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
