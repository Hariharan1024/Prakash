import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function PasswordForm(props) {
    toast.configure()
    const history = useHistory();
    const [inputField, setInputField] = useState({
        otpCode: "",
        password: "",
        confirmpassword: "",
    })
    const [errField, setErrField] = useState({
        otpCodeerr: '',
        passworderr: '',
        confirmpassworderr: ''
    })

    const validForm = () => {
        let formIsValid = true;
        setErrField({
            otpCodeerr: '',
            passworderr: '',
            confirmpassworderr: ''
        })
        if (inputField.otpCode == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, otpCodeerr: 'Please Enter Phone Number'
            }))
        }
        if (inputField.password == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, passworderr: 'Please Enter Password'
            }))
        }
        if (inputField.confirmpassword == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, confirmpassworderr: 'Please Enter Confirm Password'
            }))
        }
        if (inputField.confirmpassword != '' && inputField.password != inputField.confirmpassword) {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, confirmpassworderr: 'Password Is Not Matching'
            }))
        }
        return formIsValid
    }

    const submit = async () => {
        if (validForm()) {
            Object.assign(inputField.props)
            console.log('valid')
            let url = ''
            let options = {
                method: 'POST',
                url: url,
                data: inputField
            }
            try {
                let response = await axios(options)
                console.log(response)
                if (response.status == 200) {
                    toast.success(response.data.message)

                } else {
                    toast.error(response.data.message)
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


    function handle(e) {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
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
                                    <div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Enter OTP</label>
                                                    <input type="number" id="otpCode" name="otpCode" value={inputField.otpCode} onChange={handle} className="form-control form-control-custom" placeholder="Enter OTP" autoComplete="off" />
                                                    {
                                                        errField.otpCodeerr !== "" && <span className='error'>{errField.otpCodeerr}</span>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="String" id="password" name="password" value={inputField.password} onChange={handle} className="form-control form-control-custom" placeholder="Password" autoComplete="off" />
                                                    {
                                                        errField.passworderr !== "" && <span className='error'>{errField.passworderr}</span>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Confirm Password</label>
                                                    <input type="number" id="confirmpassword" name="confirmpassword" value={inputField.confirmpassword} onChange={handle} className="form-control form-control-custom" placeholder="Confirm Password" autoComplete="off" />
                                                    {
                                                        errField.confirmpassworderr !== "" && <span className='error'>{errField.confirmpassworderr}</span>
                                                    }
                                                </div>
                                            </div>
                                            <div className=" text-center ">
                                                <button className="thm-btn btn-rectangle thm-bg-color- one lh-normal-three" onClick={submit}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default PasswordForm