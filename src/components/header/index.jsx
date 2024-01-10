import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
  from 'react-icons/bs'

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon header-icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        {/* <BsSearch className='icon header-icon' /> */}
      </div>
      <div className='header-right'>
        <BsPersonCircle className='icon header-icon' />
      </div>
    </header>
  )
}

export default Header