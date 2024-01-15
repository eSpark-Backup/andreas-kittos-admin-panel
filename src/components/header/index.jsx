import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
  from 'react-icons/bs'
import user from "../../assets/images/User.svg"
import { Typography, Divider } from '@mui/material'
import logout from "../../assets/icons/Logout.svg"
import { useState } from "react"
import { Link } from "react-router-dom"


function Header({ OpenSidebar }) {
  const [showDropDown, setDropDown] = useState(false)
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon header-icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        {/* <BsSearch className='icon header-icon' /> */}
      </div>
      <div className='header-right'>
        <BsPersonCircle className='icon header-icon' style={{ cursor: "pointer" }} onClick={() => setDropDown(!showDropDown)} />
        {showDropDown ? <div className="head-dropdown">
          <div className="dropdown-top">
            <img src={user} alt='User' />
            <Typography sx={{ color: "#9E9EA4", fontSize: "16px" }}>John Doe</Typography>
          </div>
          <Divider />
          <Link to={"/sign-in"}>
            <button>
              <img src={logout} alt="Logout" />
              Logout
            </button>
          </Link>
        </div> : null}
      </div>
    </header>
  )
}

export default Header