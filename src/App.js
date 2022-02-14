import React from 'react';
import{ BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from'./components/Login';
import SignUp from './components/SignUp';
import MyAccountForm from './components/MyAccountForm';
import About from './components/About';
import ContactUs from './components/ContactUs'





function App() {
  return (
    <BrowserRouter>
    <Switch>
   <Route exact path="/Login" component={Login}/>
   <Route exact path="/SignUp" component={SignUp}/>
   <Route exact path="/MyAccountForm" component={MyAccountForm}/>
   <Route exact path="/About" component={About}/>
   <Route exact path="/ContactUs" component={ContactUs}/>
   <Login/>
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;




// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" component={Dashboard} />
//         <Route
//           path="/profile"
//           render={props => (
//             <Profile props={props} role="ADMIN" />
//           )} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

// import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" component={Dashboard} />
//         <Route
//           path="/profile"
//           render={props => (
//             <Profile props={props} role="ADMIN" />
//           )} />
//       </Switch>
//     </BrowserRouter>
//   );
// }