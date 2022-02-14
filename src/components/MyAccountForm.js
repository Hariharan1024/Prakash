import React from 'react'
import { Link } from 'react-router-dom'
import User from '../images/User.jpg'

const MyAccountForm = () => {
    return (
        <div>
            <section className="user_account">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <div className="account_sidebar section pb-0 h-100">
                                <h4 className="title">My Account</h4>
                                <ul>
                                    <li className="active">
                                        <Link to="">
                                            <i className="fal fa-user"></i>
                                            My Account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="order-list.html">
                                            <i className="fal fa-luggage-cart"></i>
                                            My Order
                                        </Link>
                                    </li>


                                    <li>
                                        <Link to="">
                                            <i className="fal fa-bell"></i>
                                            Notifications
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="section">
                                <div className="user_info_box">

                                    <div className="user_box">
                                        <div className="image">
                                            <img src={User} className="image-fit" alt="img" />
                                            <Link to="" className="edit">
                                                <i className="fal fa-pencil"></i>
                                            </Link>
                                        </div>
                                        <div className="user_text">
                                            <h6 className="name mb-0">Nexevo    </h6>
                                            <p className="mb-0">India</p>
                                        </div>
                                    </div>

                                    <form className="user_form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>First Name</label>
                                                    <input type="text" className="form-control form-control-custom" placeholder="First Name" autocomplete="off" required="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Last Name</label>
                                                    <input type="text" className="form-control form-control-custom" placeholder="Last Name" autocomplete="off" required="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Email Id</label>
                                                    <input type="email" className="form-control form-control-custom" placeholder="Email Id" autocomplete="off" required="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Phone Number</label>
                                                    <input type="text" className="form-control form-control-custom" placeholder="Phone Number" autocomplete="off" required="" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Address</label>
                                                    <input type="text" className="form-control form-control-custom" placeholder="Address" autocomplete="off" required="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>City</label>
                                                    <input type="text" className="form-control form-control-custom" placeholder="City" autocomplete="off" required="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>State</label>
                                                    <input type="text" className="form-control form-control-custom" placeholder="State" autocomplete="off" required="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Postal Address</label>
                                                    <input type="text" className="form-control form-control-custom" placeholder="Postal Address" autocomplete="off" required="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="thm-btn btn-rectangle thm-bg-color- one lh-normal-three">Save Changes</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyAccountForm