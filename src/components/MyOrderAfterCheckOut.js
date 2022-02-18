import React from 'react';
import { Link } from "react-router-dom";
import "../css/Myorders.css";
import { useState, useEffect } from 'react';
import axios from 'axios';


const MyOrderAfterCheckOut = () => {
    const [data, setData] = useState([])

    // useEffect(()=>{
    //     getCartProduct()
    // },[])

    // const access_token = localStorage.getItem('access_token')

    // const getCartProduct = () =>{
    //     const header =  {
    //         "Constant-Type" : "Application/json",
    //         Authorization : "Bearer" ///add access token (+ access_token,)
    //     };
    //     var url = "";
    //     axios.get(url, {headers: header})
    //     .then((response)=>{
    //         console.log(response); 
    //         setData(response)
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //     })
    // }

    //  function deleteCancelProduct(id) {
    //      const headers = {
    // 'Authorization' : 'Bearer' + access_token,
    //      };
    //      axios.delete('' + id, {headers})
    //      .then(()=>
    //      console.log('deleted successfully')
    //      );
    //  }


     


    
    return (
        <div>
            <section className="user_account">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <div className="account_sidebar section pb-0 h-100">
                                <h4 className="title">My Account</h4>
                                <ul>
                                    <li className="">
                                        <Link to="">
                                            <i className="fal fa-user"></i>
                                            My Account
                                        </Link>
                                    </li>
                                    <li className='active'>
                                        <Link to="order-list.html">
                                            <i className="fal fa-luggage-cart "></i>
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
                        <h3 style={{margin: "40px"}}>My Order</h3>
                            <table class="table table-borderless">
                                <thead class="table-secondary" id='table-head'>
                                    <tr>
                                        <th >Order No</th>
                                        <th>Order Date</th>
                                        <th>Product Count</th>
                                        <th>Total Price</th>
                                        <th>Products</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                 {data.map((mytotalorder) =>{
                                    return (
                                        <tr>
                                        <td>{mytotalorder.orderno}</td>
                                        <td>{mytotalorder.orderdate}</td>
                                        <td>{mytotalorder.productcount}</td>
                                        <td>{mytotalorder.totalprice}</td>
                                        <td><Link className="btn btn-danger btn-sn" to={"/"}>View Product</Link></td>
                                        <td><Link className="btn btn-danger btn-sn" >Cancel Product</Link></td>   
                                        </tr>
                                    )
                                 })}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyOrderAfterCheckOut
// onClick={() => deleteCancelProduct(mytotalorder.id)} 
// to={"ViewProduct/" + mytotalorder.id}







