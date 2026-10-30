import { UtensilsCrossedIcon , SquareMenu,CircleStar, RotateCcwClock,ReceiptText, Settings, HeartHandshake, LogOut } from 'lucide-react';
import {NavLink} from 'react-router-dom';

export const Sidebar = () => {
    return (
        <div className='sidebarM'>
            <div className="icon">
                <span>
                    <UtensilsCrossedIcon /> <h2>PG Foods</h2>
                </span>
            </div>

            <nav className='sidebarM-items'>

                <span>
                    <SquareMenu />
                    <NavLink to="/menu">Menu</NavLink>
                </span>


                <span>
                    <CircleStar />
                    <NavLink to="/orderList">OrderList</NavLink>
                </span>

                <span>
                    <RotateCcwClock />
                    <NavLink to="/history">History</NavLink>
                </span>

                <span>
                    <ReceiptText />
                    <NavLink to="/bills">Bills</NavLink>
                </span>

                <span>
                    <Settings />
                    <NavLink to="/setting">Setting</NavLink>
                </span>

                <span>
                    <HeartHandshake />
                    <NavLink to="/help">Help Center</NavLink>
                </span>

                <span className='sidebarLogout'>
                    <LogOut />
                    <NavLink to="/logout">Logout</NavLink>
                </span>
            </nav>

        </div>
    )
}
