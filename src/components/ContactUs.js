import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const ContactUs = () => {
    toast.configure()
    const history = useHistory();
    const [inputField, setInputField] = useState({
        firstname: "",
        lastname: "",
        phonenumber: "",
        email: "",
        message:""
    })

    const [errField, setErrField] = useState({
        firstnameerr: "",
        lastnameerr: "",
        phonenumbererr: "",
        emailerr: "",
        messageerr:""
    })

    function handle(e) {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }

    const submit = async () => {
        if (validForm()) {
            console.log('valid')
            let url = ''
            let options = {
                method: 'POST',
                url: url,
                headers: {},
                data: inputField
            }
            try {
                let response = await axios(options)
                if (response.status == 200) {
                    toast.success("Your Enquiry Has Been Submitted Successfully")
                    setTimeout(() => {
                        history.push('/')
                    }, 1500)
                }
            }
            catch {
                toast.error("Something Went Wrong");
            }
        }
        else {
            console.log('invalid')
            toast.error("Form Is Invalid")
        }
    }

    const validForm = () => {
        let formIsValid = true;
        setErrField({
            firstnameerr: '',
            lastnameerr: '',
            phonenumbererr: '',
            emailerr: '',
            messageerr:''
        })
        if (inputField.firstname == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, firstnameerr: 'Please Enter Name'
            }))
        }
        if (inputField.lastname == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, lastnameerr: 'Please Enter Last Name'
            }))
        }
        if (inputField.phonenumber == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, phonenumbererr: 'Please Enter Phone Number'
            }))
        }
        if (inputField.email == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, emailerr: 'Please Enter Email Id'
            }))
        }
        if (inputField.message == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, messageerr: 'Please Enter a Message'
            }))
        }
        return formIsValid
    }


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
                                <a href="tel:(+347)1234567890" className="text">Nexevo Technologies</a>
                                <p className="text">Mon-Sat 9:30am-7:00pm</p>
                            </div>
                        </div>


                        <div className="col-lg-4 col-sm-6">
                            <div className="contact_box">
                                <div className="icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <a href="tel:(+347)1234567890" className="text">Contact Us</a>
                                <p className="text">9009009000</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="contact_box">
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <a href="mailto:example@example.com" className="text">nexevo@gmail.com</a>
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
                                <div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" id="firstname" name="firstname" onChange={handle} className="form-control form-control-custom" placeholder="Full Name" autoComplete="off" />
                                                {
                                                    errField.firstnameerr !== "" && <span className='error'>{errField.firstnameerr}</span>
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" id="lastname" name="lastname" onChange={handle} className="form-control form-control-custom" placeholder="Last Name" autoComplete="off" />
                                                {
                                                    errField.lastnameerr !== "" && <span className='error'>{errField.lastnameerr}</span>
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="number" id="phonenumber" name="phonenumber" onChange={handle} className="form-control form-control-custom" placeholder="Phone No." autoComplete="off" />
                                                {
                                                    errField.phonenumbererr !== "" && <span className='error'>{errField.phonenumbererr}</span>
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" id="email" name="email" onChange={handle} className="form-control form-control-custom" placeholder="Email Id" autoComplete="off" />
                                                {
                                                    errField.emailerr !== "" && <span className='error'>{errField.emailerr}</span>
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea rows="8"  id="message" name="message" onChange={handle} className="form-control form-control-custom" placeholder="Message" autoComplete="off" ></textarea>
                                                {
                                                    errField.messageerr !== "" && <span className='error'>{errField.messageerr}</span>
                                                }
                                            </div>
                                        </div>
                                        <div className="text-center ">
                                            <button onClick={submit} className="thm-btn btn-rectangle thm-bg-color- one lh-normal-three" >Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" container-flex col-lg-4">
                            <div className=" contact_map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.089176434136!2d77.6606587!3d13.0023772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7745cc56c25525e!2sNexevo%20Technologies!5e0!3m2!1sen!2sin!4v1644588093225!5m2!1sen!2sin" style={{height:  "100%" , width: "100%"}} ></iframe>
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
