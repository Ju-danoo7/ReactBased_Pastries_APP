import { NavLink, Outlet } from 'react-router';
import { useState } from 'react';
import Footer from './Footer';



export default function Layout() {
    const [collapseMenu, setCollapseMenu] = useState(true);
    const [value, setValue] = useState(0);

    const toggleMenu = () => {
        setCollapseMenu(!collapseMenu);
    }
    const closeMenu = () => {
        setCollapseMenu(!false);
    }
    return (
        <>
            <div className="flex items-center bg-white justify-between shadow-sm h-12 md:h-16 px-3 md:px-4 gap-3 max-w-5xl mx-auto">
                <div className="md:hidden " onClick={toggleMenu}>
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <line x1="4" y1="7" x2="15" y2="7" />
                        <line x1="4" y1="12" x2="15" y2="12" />
                        <line x1="4" y1="17" x2="15" y2="17" />
                    </svg>
                </div>
                <NavLink to="." className="font-bold text-lg md:mr-auto">
                    Pasteries Delight
                </NavLink>
                <NavLink to="cart" className="font-bold flex relative md:order-3">{value > 0 ? <span className='flex items-center justify-center bg-amber-600 p-1 absolute text-xs w-4 h-4 rounded-full -top-2 -left-3'>{value}</span> : null}
                    <img src="./images/cart.svg" alt="cart-icon" aria-label='link to purchase page' />
                </NavLink>

                <ul className={`absolute bg-white z-30 transitio duration-300 md:hidden ease-in ${collapseMenu ? "-top-60" : "top-0"} text-amber-600 text-sm font-semibold left-0 right-0 items-center py-3 flex flex-col gap-3 shadow-md`}>
                    <li onClick={closeMenu} className=""><img className='w-6' src="./images/close.svg" alt="close-icon" /></li>
                    <NavLink
                        to="."
                        className={({ isActive }) => isActive ? "font-bold border-b-2 pb-1" : ""}>Home</NavLink>
                    <NavLink
                        to="profile"
                        className={({ isActive }) => isActive ? "font-bold border-b-2 pb-1" : ""}>Profile</NavLink>
                    <NavLink
                        to="products"
                        className={({ isActive }) => isActive ? "font-bold border-b-2 pb-1" : ""}>Products</NavLink>
                    <NavLink
                        to="cart"
                        className={({ isActive }) => isActive ? "font-bold border-b-2 pb-1" : ""}>Order</NavLink>
                    <NavLink
                        to="services"
                        className={({ isActive }) => isActive ? "font-bold border-b-2 pb-1" : ""}>Services</NavLink>
                </ul>
                <ul className={`hidden z-30 transitio duration-300 ease-in text-gray-800 text-sm font-semibold left-0 right-0 items-center py-3 md:flex gap-3`}>
                    <NavLink
                        to="."
                        className={({ isActive }) => isActive ? "font-bold border-b-2 pb-1" : ""}>Home</NavLink>
                    <NavLink
                        to="profile"
                        className={({ isActive }) => isActive ? "font-bold border-b-2 pb-1" : ""}>Profile</NavLink>
                    <NavLink
                        to="products"
                        className={({ isActive }) => isActive ? "font-bold border-b-2 pb-1" : ""}>Products</NavLink>
                    <NavLink
                        to="cart"
                        className={({ isActive }) => isActive ? "font-bold border-b-2 pb-1" : ""}>Order</NavLink>
                    <NavLink
                        to="services"
                        className={({ isActive }) => isActive ? "font-bold border-b-2 pb-1" : ""}>Services</NavLink>
                </ul>
            </div >
            <Outlet context={[value, setValue]} />
            <Footer />

        </>
    )
}