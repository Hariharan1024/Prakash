import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>

      <section className="section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="login_register_box">
                <div className="box_inner">
                  <h3 className="title">Login to your account</h3>
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" className="form-control form-control-custom" placeholder='Enter your Email' autocomplete="off" required="" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Password </label>
                          <input type="password" className="form-control form-control-custom" placeholder='Enter Your Password' autocomplete="off" required="" />
                          <button className="fal fa-eye" type="button">
                            <span></span>
                          </button>
                        </div>

                        <Link className=" py-1" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ cursor: "pointer" }}>
                          Forgot Password?</Link>

                        <div className="modal fade " style={{height:"500px"}} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content" >
                              <div className="modal-header"  style={{paddingLeft:"200px"}}>
                                <h5 className="modal-title"   id="exampleModalLabel">Login</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div  style={{padding:"0,0,0,30px"}}>    <input  type="text" className="" placeholder='Enter Email Id' style={{width:"350px", dispaly:"flex", textAlign:"center"}} /> </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="thm-btn btn-rectangle thm-bg-color-one w-100">Submit</button>
                        <p className="mt-3 mb-0 text-center fw-500">Don't have an account? <Link to="SignUp" className="thm-color-one">Create new account</Link></p>
                      </div>
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




// <div id='toshow' style={{display:"none"}}>click me to reset
// function showCode () {
//   document.getElementById("toshow").style.display ="block";
// }
// onClick={showCode}