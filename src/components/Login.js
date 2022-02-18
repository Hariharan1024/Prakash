import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


export default function Login() {
  toast.configure()
  const history = useHistory();
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
  })
  const [errField, setErrField] = useState({
    emailerr: '',
    passworderr: '',
  })

  function handleChange(e) {
    setInputField({ ...inputField, [e.target.name]: e.target.value })
  }

  const validForm = () => {
    let formIsValid = true;
    setErrField({
      emailerr: '',
      passworderr: ''
    })
    if (inputField.email == '') {
      formIsValid = false
      setErrField(prevState => ({
        ...prevState, emailerr: 'Please Enter Email'
      }))
    }
    if (inputField.password == '') {
      formIsValid = false
      setErrField(prevState => ({
        ...prevState, passworderr: 'Please Enter Password'
      }))
    }
    return formIsValid
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
        console.log(response);
        if (response.status == 200) {
          toast.success("logged in")
          // if (response.data.statusText == 'success') {
          // toast.success("Login Successfull");
          // localStorage.setItem('token', response.data.token)
          // setTimeout(() => {
          //   history.push('/')
          // }, 1500)
          // }
        }
        else {
          toast.success(response.data.message)
        }
      } catch {
        toast.error("Something Went Wrong");
      }     //dont forget to pass parameter once we get backend response(e)
    } else {
      console.log('invalid')
      toast.error("Form Invalid");
    }
  }


  return (
    <div>

      <section className="section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="login_register_box">
                <div className="box_inner">
                  <h3 className="title">Login to your account</h3>
                  <ToastContainer />
                  <div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label>Email</label>
                          <input id='email' name='email' value={inputField.email} type="email" onChange={handleChange} className="form-control form-control-custom" placeholder='Enter your Email' autoComplete="off" />
                          {
                            errField.emailerr !== "" && <span className='error'>{errField.emailerr}</span>
                          }
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Password </label>
                          <input id='password' name='password' value={inputField.password} type="password" onChange={handleChange} className="form-control form-control-custom" placeholder='Enter Your Password' autoComplete="off" />
                          {
                            errField.passworderr !== "" && <span className='error'>{errField.passworderr}</span>
                          }
                          <button className="fal fa-eye" type="button">
                            <span></span>
                          </button>
                        </div>

                        <Link to="OtpForm" className=" py-2 " style={{ cursor: "pointer", color: "red" }}>
                          Forgot Password?</Link>
                      </div>
                      <div className="text-center">
                        <button onClick={submit} className="thm-btn btn-rectangle thm-bg-color- one lh-normal-three">Submit</button>
                        <p className="mt-3 mb-0 text-center fw-500">Don't have an account? <Link to="SignUp" className="thm-color-one">Create new account</Link></p>
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
  )
}



// <div className="modal fade " style={{ height: "500px" }} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
// <div className="modal-dialog modal-dialog-centered">
//   <div className="modal-content" >
//     <div className="modal-header" style={{ paddingLeft: "200px" }}>
//       <h5 className="modal-title" id="exampleModalLabel">Login</h5>
//       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//     </div>
//     <div style={{ padding: "0,0,0,30px" }}>    <input type="text" className="" placeholder='Enter Email Id' style={{ width: "350px", dispaly: "flex", textAlign: "center" }} /> </div>
//     <div className="modal-footer">
//       <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       <button type="button" className="btn btn-primary">Save changes</button>
//     </div>
//   </div>
// </div>
// </div>



// <div id='toshow' style={{display:"none"}}>click me to reset
// function showCode () {
//   document.getElementById("toshow").style.display ="block";
// }
// onClick={showCode}