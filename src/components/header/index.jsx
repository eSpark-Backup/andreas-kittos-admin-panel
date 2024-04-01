import { GiHamburgerMenu } from 'react-icons/gi'
import { BsPersonCircle }
  from 'react-icons/bs'
import user from "../../assets/images/User.svg"
import { Typography, Divider } from '@mui/material'
import logout from "../../assets/icons/Logout.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useGetInfoQuery } from '../../services/personalInfo'


function Header({ OpenSidebar }) {
  const [showDropDown, setDropDown] = useState(false)
  const {data:infoData,isLoading} = useGetInfoQuery()
  console.log(infoData)


  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <header className='header'>
      <div className='menu-icon'>
        <GiHamburgerMenu className='icon header-icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
      </div>
      <div className='header-right'>
        <img style={{width:"30px",height:"30px",cursor:"pointer"}} src={infoData?.data?.profileImage?infoData?.data?.profileImage:user} alt='User' onClick={() => setDropDown(!showDropDown)} />
        {showDropDown ? <div className="head-dropdown">
          <div className="dropdown-top">
            <img src={infoData?.data?.profileImage?infoData?.data?.profileImage:user} alt='User' />
            <Link to={"/settings"} onClick={() => setDropDown(false)}>
              {!isLoading?<Typography sx={{ color: "#9E9EA4", fontSize: "16px" }}>{infoData?.data?.firstName+" "+infoData?.data?.lastName}</Typography>:null}
            </Link>
          </div>
          {/* <Divider /> */}
          <div onClick={handleLogout}>
            <button>
              <img src={logout} alt="Logout" />
              Logout
            </button>
          </div>
        </div> : null}
      </div>
    </header>
  )
}

export default Header