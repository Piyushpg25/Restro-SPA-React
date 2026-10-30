import { Bell, Search } from 'lucide-react';
import Profile from '../assets/images/profile.jpg';


export const Navbar = () => {
    return (
        <nav className='navbar' >
            <div className="input" >
                <Search />
                <input type="text" placeholder='Enter your favorite dish' />
            </div>

            <div className="details">
                <p>Piyush Gajghate</p>
                <img src={Profile} style={{ height: '50px', width: '50px' }} alt="" />
                <Bell  />
            </div>
        </nav>
    )
}
