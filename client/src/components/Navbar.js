import { useState } from 'react';
import MenuDropdown from './MenuDropdown';
import setPage from '..';

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            {menuOpen && <MenuDropdown />}
            <nav class="bg-gray-900 text-white font-bold h-20 z-40 absolute w-full flex justify-center">
                <img 
                    onClick={() => setPage('home')}
                    id="homeLogo" 
                    class="absolute left-2 top-1 h-20" 
                    src="ngLogo3.png"
                />
                <img 
                    onClick={() => setMenuOpen(!menuOpen)}
                    id="menu" 
                    class="top-0 w-13 h-16 mt-1.5 right-5 absolute" 
                    src="https://icon-library.com/images/three-bar-menu-icon/three-bar-menu-icon-3.jpg"
                />
            </nav>
        </>
    );
}

export default Navbar;