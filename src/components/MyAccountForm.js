import React from 'react';
import { Link } from 'react-router-dom';
import User from '../images/User.jpg';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const MyAccountForm = () => {
    const history = useHistory();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [states, setStates] = useState("");
    const [postalAddress, setPostalAddress] = useState("");
    const [image, setImage] = useState(User);

    // url ="dfghjkl;"
    // access_token = "sdfghjkl"
    useEffect(() => {
        if (localStorage.getItem("access_token") === null) {
            history.push("/")
        }
    }, []);


    const header = {
        "content-Type": "application/json",
        Authorization: "Bearer" ///add access token (+ access_token,)
    };

    const getUserProfile = () => {
        const header = {
            "Content-Type": "application/json",
            Authorization: "Bearer " ///add access token (+ access_token,)
        };
        // var url = "";
        // Axios.get(url, { headers: header })
        //     .then((response) => {
        //         console.log(response);
        //         setFirstName(response);
        //         setLastName(response);
        //         setEmail(response);
        //         setPhoneNumber(response);
        //         setAddress(response);
        //         setCity(response);
        //         setStates(response);
        //         setPostalAddress(response);
        //         setImage(response);
        //     });
    };

    useEffect(() => {
        getUserProfile();
    }, [true]);



    const submit = (e) => {
        e.preventDefault();
        if (validForm()) {
            console.log("valid")
        } else {
            console.log("invalid")
        }
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("phoneNumber", phoneNumber);
        formData.append("address", address);
        formData.append("city", city);
        formData.append("states", states);
        formData.append("postalAddress", postalAddress);
        formData.append("image", image);

        const header = {
            "Content-Type": "application/json",
            Authorization: "Bearer " ///add access token (+ access_token,)
        };

        var object = {};
        formData.forEach((value, key) => (object[key] = value));
        var json = JSON.stringify(object);
        const jsonRequest = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            city: city,
            states: states,
            postalAddress: postalAddress,
            image: ""
        };
        Axios.put(jsonRequest, { headers: header }) ////add url ,jsonRequest, { headers: header }
            .then((response) => {
                console.log(response);
                history.push("/");
            })
            .catch((err) => {
                console.log("Error");
            });
    }


    const [errField, setErrField] = useState({
        firstnameerr: "",
        lastnameerr: "",
        emailerr: "",
        phonenumbererr: "",
        homeaddresserr: "",
        cityerr: "",
        stateserr: "",
        postaladdresserr: ""
    })


    const validForm = () => {
        let formIsValid = true;
        setErrField({
            firstnameerr: "",
            lastnameerr: "",
            emailerr: "",
            phonenumbererr: "",
            homeaddresserr: "",
            cityerr: "",
            stateerr: "",
            postaladdresserr: ""
        })
        if (firstName == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, firstnameerr: 'Please Enter First Name'
            }))
        }
        if (lastName == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, lastnameerr: 'Please Enter Last Name'
            }))
        }
        if (email == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, emailerr: 'Please Enter Email Id'
            }))
        }
        if (phoneNumber == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, phonenumbererr: 'Please Enter Phone Number'
            }))
        }
        if (address == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, homeaddresserr: 'Please Enter Address'
            }))
        }
        if (city == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, cityerr: 'Please Enter City'
            }))
        }
        if (states == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, stateserr: 'Please Enter State'
            }))
        }
        if (postalAddress == '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, postaladdresserr: 'Please Enter Postal Address'
            }))
        }
        return formIsValid
    }



const imageChange = (e) =>{
    if(e.target.files && e.target.files.length > 0){
        setImage(e.target.files[0]);
    }
};




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
                                        <Link to="MyOrder">
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
                                            <img src={image}  className="image-fit" alt=""  accept="image/*" />
                                            <Link to="" type="file"  className="edit">
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
                                                    <input type="text" name="firstname" onChange={(e) => setFirstName(e.target.value)} value={firstName}
                                                        className="form-control form-control-custom" placeholder="First Name" autoComplete="off" />
                                                    {
                                                        errField.firstnameerr !== "" && <span className='error'>{errField.firstnameerr}</span>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Last Name</label>
                                                    <input type="text" name="lastname" onChange={(e) => setLastName(e.target.value)} value={lastName} className="form-control form-control-custom" placeholder="Last Name" autoComplete="off" />
                                                    {
                                                        errField.lastnameerr !== "" && <span className='error'>{errField.lastnameerr}</span>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Email Id</label>
                                                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control form-control-custom" placeholder="Email Id" autoComplete="off" />
                                                    {
                                                        errField.emailerr !== "" && <span className='error'>{errField.emailerr}</span>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Phone Number</label>
                                                    <input type="text" name="phonenumber" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} className="form-control form-control-custom" placeholder="Phone Number" autoComplete="off" />
                                                    {
                                                        errField.phonenumbererr !== "" && <span className='error'>{errField.phonenumbererr}</span>
                                                    }
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Address</label>
                                                    <input type="text" name="address" onChange={(e) => setAddress(e.target.value)}
                                                        value={address} className="form-control form-control-custom" placeholder="Address" autoComplete="off" />
                                                    {
                                                        errField.homeaddresserr !== "" && <span className='error'>{errField.homeaddresserr}</span>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>City</label>
                                                    <input type="text" name="city" onChange={(e) => setCity(e.target.value)} value={city} className="form-control form-control-custom" placeholder="City" autoComplete="off" />
                                                    {
                                                        errField.cityerr !== "" && <span className='error'>{errField.cityerr}</span>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>State</label>
                                                    <input type="text" name="states" onChange={(e) => setStates(e.target.value)} value={states} className="form-control form-control-custom" placeholder="State" autoComplete="off" />
                                                    {
                                                        errField.stateserr !== "" && <span className='error'>{errField.stateserr}</span>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Postal Address</label>
                                                    <input type="text" name="postaladdress" onChange={(e) => setPostalAddress(e.target.value)} value={postalAddress} className="form-control form-control-custom" placeholder="Postal Address" autoComplete="off" />
                                                    {
                                                        errField.postaladdresserr !== "" && <span className='error'>{errField.postaladdresserr}</span>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button onClick={submit} className="thm-btn btn-rectangle thm-bg-color- one lh-normal-three">Save Changes</button>
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





// import { useState } from "react";

// const App = () => {
//   const [selectedImage, setSelectedImage] = useState();

//   // This function will be triggered when the file field change
//   const imageChange = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setSelectedImage(e.target.files[0]);
//     }
//   };

//   // This function will be triggered when the "Remove This Image" button is clicked
//   const removeSelectedImage = () => {
//     setSelectedImage();
//   };

//   return (
//     <>
//       <div >
//         <input
//           accept="image/*"
//           type="file"
//           onChange={imageChange}
//         />

//         {selectedImage && (
//           <div>
//             <img
//               src={URL.createObjectURL(selectedImage)}
            
//               alt="Thumb"
//             />
           
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default App;