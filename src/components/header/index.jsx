import { BsPersonCircle } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <GiHamburgerMenu className='icon header-icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
      </div>
      <div className='header-right'>
        <BsPersonCircle className='icon header-icon' />
      </div>
    </header>
  )
}

export default Header