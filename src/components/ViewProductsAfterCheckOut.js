import React from 'react';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Myorders.css';

const ViewProductsAfterCheckOut = (props) => {

    const [items, setItems] = useState([])

//    useEffect(()=>{
//         getCartProduct()
// console.log(props.match.params.id)
//     },[])

//     const access_token = localStorage.getItem('access_token')

//     const getCartProduct = () =>{
//         const header =  {
//             "Constant-Type" : "Application/json",
//             Authorization : "Bearer" ///add access token (+ access_token,)
//         };
//         var url = "";
//         axios.get(url +props.match.params.id, {headers: header})
//         .then((response)=>{
//             console.log(response); 
//             setData(response)
//         })
//         .catch(err =>{ 
//             console.log(err)
//         }, [])
//     }

//      function deleteCancelProduct(id) {
//          const headers = {
//     'Authorization' : 'Bearer' + access_token,
//          };
//          axios.delete('' + id, {headers})
//          .then(()=>
//          console.log('deleted successfully')
//          );
//      }


                                                                  

  return(
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
                    <h3 style={{margin: "40px"}}>Order No</h3>
                        <table class="table table-borderless">
                            <thead class="table-secondary" id='table-head'>
                                <tr>
                                    <th >Product</th>
                                    <th>Model No</th>
                                    <th>Brand</th>
                                    <th>Type</th>
                                    <th>Qty(units)</th>
                                    <th>Price(units)</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                             {items.map((items) =>{
                                return (
                                    <tr>
                                    <td>{items.product}</td>
                                    <td>{items.modelno}</td>
                                    <td>{items.brand}</td>
                                    <td>{items.type}</td>
                                    <td>{items.qty}</td>
                                    <td>{items.price}</td>
                                    <td><Link className="btn btn-danger btn-sn">Remove Product</Link></td>   
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

export default ViewProductsAfterCheckOut

// dont forget to add back button
// onClick={() => deleteCancelProduct(mytotalorder.id)} 





// reference
// import React, { useState,useEffect } from 'react';

// import Axios from "axios";
// import Header from "./Header";

// const ProductDetail = (props) => {
//     const [item,setItem]=useState(null);
// const url=('https://testapi.demo-nexevo.in/api/products/')
// const access_token = localStorage.getItem('access_token');
// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + access_token
//   }
  

//     useEffect(() =>{
//         console.log(props.match.params.id)
// Axios.get(url +props.match.params.id , { headers: headers})
// .then(res=>{
//     console.log(res.data)
//     setItem(res.data.data)
//   })
//   .catch(err=>{
//     console.log(err)
//   })
//     }, [])
     
//   return (
//     <>
//     <Header/>
//       <div>
//       <div className="container col-10">
//       <div className="row justify-content-around height-300px ">
//       {item &&
//         <div className="card-body text-center">
//                         <h5 className="card-title">{item.title}</h5>
//                   <div className="card my-5 py-4 " key={item.id} style={{width: "24rem", height: "300px"}}>
//                 <img  src={item.image_url} width="150px" height="120px" align="cente"/>
//                      <p className="lead">{item.description}</p>
//                         <p className="lead">{item.price}</p>
                        
                     
//                     </div>
// </div>
//     }
//       </div>

//   </div>

//       </div>
//       </>
//       );
      
// };

// export default ProductDetail;

