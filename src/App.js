import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import{ BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from'./components/Login';
import SignUp from './components/SignUp';
import MyAccountForm from './components/MyAccountForm';
import About from './components/About';
import ContactUs from './components/ContactUs';
import otpForm from './components/OtpForm';
import passwordForm from './components/PasswordForm';
import ProductComparison from './components/ProductComparison';
import MyOrderAfterCheckOut from './components/MyOrderAfterCheckOut';
import ViewProductsAfterCheckOut from './components/ViewProductsAfterCheckOut';





function App() {
  toast.configure()
  return (
    <BrowserRouter>
    <Switch>
   <Route exact path="/Login" component={Login}/>
   <Route exact path="/SignUp" component={SignUp}/>
   <Route exact path="/MyAccountForm" component={MyAccountForm}/>
   <Route exact path="/About" component={About}/>
   <Route exact path="/ContactUs" component={ContactUs}/>
   <Route exact path="/otpForm" component={otpForm}/>
   <Route exact path="/passwordForm" component={passwordForm}/>
   <Route exact path="/ProductComparison" component={ProductComparison}/>
   <Route exact path="/MyOrderAfterCheckOut" component={MyOrderAfterCheckOut}/>
   <Route exact path="/ViewProductsAfterCheckOut" component={ViewProductsAfterCheckOut}/>
   <Login/>
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;



