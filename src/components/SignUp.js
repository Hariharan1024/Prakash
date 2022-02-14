import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
    <section className="section">
    <div className="container-fluid">
    <div className="row justify-content-center">
    <div className="col-lg-6">
    <div className="login_register_box">
    <div className="box_inner">
    <h3 className="title">Sign Up</h3>
    <form>
    <div className="row">
    <div className="col-12">
    <div className="form-group">
    <label>Enter Full Name</label>
    <input type="text" className="form-control form-control-custom" placeholder="Enter Full Name"  autocomplete="off" required=""/>
    </div>
     </div>
    <div className="col-12">
    <div className="form-group">
    <label>Enter Email Id</label>
    <input type="email" className="form-control form-control-custom" placeholder="Enter Email Id" autocomplete="off" required=""/>
    </div>
    </div>
    <div className="col-12">
    <div className="form-group">
    <label>Enter Password <Link to="/" className="thm-color-one">Forgot Password?</Link></label>
    <input type="password"  className="form-control form-control-custom"  placeholder="Enter Password"  autocomplete="off" required=""/>
    <button  className="fal fa-eye" type="button">
    <span></span>
    </button>
    </div>
    </div>
    <div className="col-12">
    <div className="form-group">
    <div className="custom-control custom-radio me-sm-2 form-check">
    <input type="radio" className="custom-control-input form-check-input" id="radioValidation"/>
    <label className="custom-control-label" for="radioValidation">Keep me logged in</label>
    </div>
    </div>
    </div>
    <div className="col-12">
    <button type="submit" className="thm-btn btn-rectangle thm-bg-color-one w-100">Sign Up</button>
    <p className="mt-3 mb-0 text-center fw-500">Already have an account? <Link to="/Login" className="thm-color-one">Login</Link></p>
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

export default SignUp