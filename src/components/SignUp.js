import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast} from 'react-toastify';
const SignUp = () => {
  toast.configure()
  const history = useHistory();
  const [inputField, setInputField] = useState ({
        name: "",
        email: "",
        number: "",
        password: "",
        confirmpassword: ""

  })
  const [errField, setErrField] = useState ({
    nameerr:'',
    emailerr:'',
    numbererr:'',
    passworderr:'',
    confirmpassworderr:''
  })

     function handle(e) {
    setInputField({...inputField, [e.target.name]: e.target.value})
      }

      const submit = async () =>{
        if(validForm()){
          console.log('valid')
          let url=''
          let options={
          method:'POST',
          url:url,
          headers:{     },
          data:inputField}
          try{
            let response = await axios (options)
            if(response.status ==200){
              toast.success("Registered Successfully")
              setTimeout(()=>{
                history.push('/Login')
              },1500)
            }
           }
           catch{
             toast.error("Something Went Wrong");
           }
        }
        else {
          console.log('invalid')
          toast.error("Form Is Invalid")
        }
      }

      const validForm = () =>{
        let formIsValid = true;
        setErrField({
          nameerr:'',
          emailerr:'',
          numbererr:'',
          passworderr:'',
          confirmpassworderr:''
          
        })
        if (inputField.name ==''){
          formIsValid =false
          setErrField(prevState =>({
            ...prevState,nameerr :'Please Enter Name'
          }))
        } 
        if (inputField.email ==''){
          formIsValid =false
          setErrField(prevState =>({
            ...prevState,emailerr:'Please Enter email'
          }))
        }
        if (inputField.number ==''){
          formIsValid =false
          setErrField(prevState =>({
            ...prevState,numbererr:'Please Enter Phone Number'
          }))
        }
        if (inputField.password ==''){
          formIsValid =false
          setErrField(prevState =>({
            ...prevState,passworderr :'Please Enter Password'
          }))
        }
        if (inputField.confirmpassword ==''){
          formIsValid =false
          setErrField(prevState =>({
            ...prevState,confirmpassworderr :'Please Enter Confirm Password'
          }))
        }
        if (inputField.confirmpassword !='' && inputField.password != inputField.confirmpassword){
          formIsValid =false
          setErrField(prevState =>({
            ...prevState,confirmpassworderr:'Password Is Not Matching'
          }))
        }
        return formIsValid
      }



  return (
    <div>
      <section className="section" >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="login_register_box">
                <div className="box_inner">
                  <h3 className="title">Sign Up</h3>
                  <ToastContainer />
                  <div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label>Enter Full Name</label>
                          <input type="text" id="name" name="name" value={inputField.name} onChange={handle} className="form-control form-control-custom" placeholder="Enter Full Name" autoComplete="off" />
                          {
                            errField.nameerr !== "" && <span className='error'>{errField.nameerr}</span>
                          }
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Enter Email Id</label>
                          <input type="email" id="email" name="email" value={inputField.email} onChange={handle} className="form-control form-control-custom" placeholder="Enter Email Id" autoComplete="off"  />
                          {
                            errField.emailerr !== "" && <span className='error'>{errField.emailerr}</span>
                          }
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Enter Phone Number</label>
                          <input type="number" id="number" name="number" value={inputField.number} onChange={handle} className="form-control form-control-custom" placeholder="Enter Phone Number" autoComplete="off"  />
                          {
                            errField.numbererr !== "" && <span className='error'>{errField.numbererr}</span>
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
                          <input type="text" id="confirmpassword"  name="confirmpassword" value={inputField.confirmpassword} onChange={handle} className="form-control form-control-custom" placeholder="Confirm Password" autoComplete="off" />
                          {
                            errField.confirmpassworderr !== "" && <span className='error'>{errField.confirmpassworderr}</span>
                          }
                        </div>
                      </div>
                      <div className="text-center">
                        <button  className="thm-btn btn-rectangle thm-bg-color- one lh-normal-three"  onClick={submit}>Sign Up</button>
                        <p className="mt-3 mb-0 text-center fw-500">Already have an account? <Link to="/Login" className="thm-color-one">Login</Link></p>
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

export default SignUp





// https://www.youtube.com/watch?v=OgPf0ie90jU
// Email Send, Verify OTP & Change Password | #9 | MERN Stack tutorial in Hindi | Mini Project





// onst SignUp = () => {
  //   const history = useHistory();
  //   const url = ("api/axios")
  //   const [error, setError] = useState("");
  //   const [message, registerMessage] = useState("Enter Your Details");
  //   const [signUpData, setSignUpData] = useState({
  //     name: "",
  //     email: "",
  //     number: "",
  //     password: "",
  //     confirmpassword: ""
  //   })
  
  
  //   function handle(e) {
  //     const newData = { ...signUpData };
  //     newData[e.target.id] = e.target.value
  //     setSignUpData(newData);
  //     console.log(newData);
  //   }
  
  
  //   function registerFormData(e) {
  //     axios.post(url, {
  //       name: signUpData.name,
  //       email: signUpData.email,
  //       number: signUpData.number,
  //       password: signUpData.password,
  //       confirmpassword: signUpData.confirmpassword
  //     }).then((res) => {
  //       console.log(res.signUpData)
  //       registerMessage("You Have Registered Successfully")
  //       history.push("/Login")
  //     })
  //       .catch((err) => {
  //         console.log("Error");
  //       });
  //   };
  
  //   function submit(e) {
  //     e.preventDefault();
  //     if (signUpData.password !== signUpData.confirmpassword) {
  //       alert("Password Do Not Match");
  //     } else {
  //       setError("");
  //       try {
  //         registerFormData();
  //       } catch (e) {
  //         alert(`Registration failed! ${e.message}`);
  //       }
  //     }
  //   }
  


