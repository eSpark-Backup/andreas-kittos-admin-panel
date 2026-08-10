import { BsCart3 } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { sidebarTabs } from '../../constant';
import { Link, useLocation } from 'react-router-dom';

import DashboardIcon from '../../assets/icons/Dashboard.svg';
import CategoriesIcon from '../../assets/icons/Products.svg';
import UsersIcon from '../../assets/icons/Users.svg';
import OrderIcon from '../../assets/icons/Order.svg';
import SettingIcon from '../../assets/icons/setting.svg';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    const location = useLocation();

    const iconMap = {
        Dashboard: DashboardIcon,
        Categories: CategoriesIcon,
        Users: UsersIcon,
        Order: OrderIcon,
        setting: SettingIcon,
    };

    const HandleClick = () => {
        window.sessionStorage.setItem("orderPage", 1);
        window.sessionStorage.setItem("customerPage", 1);
    }

    return (
        <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
            <div className="sidebar-title">
                <Link className="decoration-none" to={'/'}>
                    <div className="sidebar-brand">
                        <BsCart3 className="icon_header" /> SHOP
                    </div>
                </Link>
                <span className="icon close_icon" onClick={OpenSidebar}>
                    <GiHamburgerMenu />
                </span>
            </div>

            <ul className="sidebar-list">
                {sidebarTabs.map((tab, index) => {
                    const isActive = location.pathname === tab.href;
                    const IconComponent = iconMap[tab.icons];

                    return (
                        <Link to={tab.href} className="sidebar-list-links" key={index} onClick={HandleClick}>
                            <li className={`sidebar-list-item ${isActive ? 'sidebar-list-item-active' : ''}`}>
                                {IconComponent && <img src={IconComponent} alt={`${tab.name} icon`} />}
                                <p>{tab.name}</p>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </aside>
    );
}

export default Sidebar;
