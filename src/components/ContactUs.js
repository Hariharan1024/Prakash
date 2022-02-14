import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <div className="section-padding">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="contact_box">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <a href="tel:(+347)1234567890" className="text">(+347) 123 4567 890</a>
                                <p className="text">Mon-Sat 9:00am-5:00pm</p>
                            </div>
                        </div>


                        <div className="col-lg-4 col-sm-6">
                            <div className="contact_box">
                                <div className="icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <a href="tel:(+347)1234567890" className="text">(+347) 123 4567 890</a>
                                <p className="text">Mon-Sat 9:00am-5:00pm</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="contact_box">
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <a href="mailto:example@example.com" className="text">example@example.com</a>
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
                                                <input type="text" className="form-control form-control-custom" placeholder="Full Name" autocomplete="off" required="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email"  className="form-control form-control-custom" placeholder="Email I'd" autocomplete="off" required="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-custom" placeholder="Phone No." autocomplete="off" required="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-custom" placeholder="Subject" autocomplete="off" required="" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea rows="8" className="form-control form-control-custom" placeholder="Message" autocomplete="off" required=""></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="thm-btn btn-rectangle thm-bg-color-one w-100">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="contact_map">
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs



// <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.089176434136!2d77.6606587!3d13.0023772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7745cc56c25525e!2sNexevo%20Technologies!5e0!3m2!1sen!2sin!4v1644588093225!5m2!1sen!2sin" style={{height:"490px", width:"480px", background:"white"}}></iframe>
