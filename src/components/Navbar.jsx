// import {Link} from "react-router-dom";
// import logo from "../Assest/ubtinxt.png"
// import "../styles/Index.css"


// const Navbar= ({ loggedIn }) => {
//     return(
//       <div>
//  <div className="navcolor">
// <nav  class="navbar navbar-expand-lg">
//     <div class="container-fluid">
//         <a id="logo-name" class="navbar-brand" href="/">
//             <img src={logo} alt="Logo" width="170" height="40" class="d-inline-block align-text-top"/>
//         </a>
//         <div class="collapse navbar-collapse" id="navbarNav">
//             <ul class="navbar-nav ms-auto">
//                 <li class="nav-item">
//                     <Link class="nav-link" to="/">Home</Link> 
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#servicecontainers">Features</a>
//                 </li>
//                 {loggedIn && (
//                 <li class="nav-item">
//                      <Link class="nav-link" to="/usecase">Products</Link>
//                 </li>
//                 )}
//                 <li class="nav-item">
//                     <Link class="nav-link" to="/">About Us</Link>
//                 </li>
//                 <li class="nav-item">
//                 <Link class="nav-link" to="/signup">login</Link>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>
// </div>
// </div>

//     ) 
// }


// export default Navbar;


import { Link } from "react-router-dom";
import logo from "../Assest/ubtinxt.png";
import "../styles/Index.css";

const Navbar = ({ loggedIn }) => {
  // Log the value of loggedIn to the console
  console.log("LoggedIn value in Navbar:", loggedIn);

  return (
    <div>
      <div className="navcolor">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a id="logo-name" className="navbar-brand" href="/">
              <img
                src={logo}
                alt="Logo"
                width="170"
                height="40"
                className="d-inline-block align-text-top"
              />
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#servicecontainers">
                    Features
                  </a>
                </li>
                {loggedIn && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/usecase">
                      Products
                    </Link>
                  </li>
                )}
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About Us
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

