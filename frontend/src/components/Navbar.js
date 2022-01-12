import { FaShoppingCart } from "react-icons/fa";
import {  useState } from "react"
import { Link } from "react-router-dom";
import userActions from "../redux/actions/authActions"
import { connect } from 'react-redux';


const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const openNavBar = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const logOutHandler = (e) => {
    e.preventDefault()
    props.logOut()
  }

  return (
    <div className="nav-container">
      <Link to='/' >
        <img src="./assets/logo.png" alt="logo" className="nav-logo" />
      </Link>
      <div className={click ? "nav-menu show" : "nav-menu"}>
        <Link to="/" className='navbar-links' onClick={closeMenu}>
          Home
        </Link>
        <Link to="/services" className='navbar-links' onClick={closeMenu}>
          Services
        </Link>
        <Link to='/contact' className='navbar-links' onClick={closeMenu}>
          ContactUs
        </Link>
        {!props.user ?
          <div className='cont-log-sign'>
            <Link to="/sign" className='navbar-links' onClick={closeMenu}>
              Sign In
            </Link>
          </div>
          :
          <div className="back-white">
            <p className='nav-links'>Welcome, {props.user.name}</p>
            <img src={props.img} className='img-user' alt="Profile user icon" />
            <div className="button-logout">
              <p className='nav-links' onClick={(e) => logOutHandler(e)} >LogOut</p>
            </div>
          </div>
        }
      </div>
      <div className='btn-menu' onClick={openNavBar} >
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    user: state.users.user,
    img: state.users.img
  }
}
const mapDispatchToProps = {
  logOut: userActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
