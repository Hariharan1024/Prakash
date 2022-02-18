import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function OtpForm() {
    const emailRef = useRef();
    const [otpForm, showForm] = useState(true);

    const sendOtp = async () => {
        try {
            let url = ''
            let options = {
                method: 'POST',
                url: url,
                headers: {},
                data: { email: emailRef.current.value }
            }
            let response = await axios(options)
            let record = response.data;
            if (response.status == 'success') {
                toast.success(record.message)
                showForm(false);
            } else {
                toast.error(record.message)
            }
        } catch { //dont forget to pass parameter after getting backend api
            toast.error("something Went Wrong");
        }
    }
    return (
        <div>
            <section className="section" >
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="login_register_box">
                                <div className="box_inner">
                                    <h3 className="title">Reset Password</h3>
                                    <ToastContainer />
                                    {otpForm ? <div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Enter Your Email </label>
                                                    <input type="text" id="name" name="email" className="form-control form-control-custom" placeholder="Enter Your Email" autoComplete="off" ref={emailRef} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button className="thm-btn btn-rectangle thm-bg-color- one lh-normal-three" onClick={sendOtp}>Send otp</button>
                                        </div>
                                    </div>
                                        : <passwordForm email={emailRef.current.value} />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}
export default OtpForm;