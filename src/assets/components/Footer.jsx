import { NavLink } from "react-router";

export default function Footer() {
    return (
        <>
            <div className="flex justify-between p-4 px-6">
                <NavLink to="." className={({ isActive }) => isActive ? "border-b-2 pb-1 flex flex-col items-center gap-2" : "flex flex-col items-center gap-2"}>
                    <img src="./images/homeIcon.svg" alt="home-icon" className="w-5" />
                    <span className="text-sm">Home</span>
                </NavLink>
                <NavLink to="cart" className={({ isActive }) => isActive ? "border-b-2 pb-1 flex flex-col items-center gap-1" : "flex flex-col items-center gap-1"}>
                    <img src="./images/cart.svg" alt="cart-icon" className="w-6" />
                    <span className="text-sm">Cart</span>
                </NavLink>
                <NavLink to="profile" className={({ isActive }) => isActive ? "border-b-2 pb-1 flex flex-col items-center gap-1" : "flex flex-col items-center gap-1"}>
                    <img src="./images/profile.png" alt="profile-icon" className="w-6" />
                    <span className="text-sm">Profile</span>
                </NavLink>
                <NavLink to="products" className={({ isActive }) => isActive ? "border-b-2 pb-1 flex flex-col items-center gap-1" : "flex flex-col items-center gap-1"}>
                    <img src="./images/search.svg" alt="" className="w-6" />
                    <span className="text-sm">Products</span>
                </NavLink>
                <NavLink to="services" className={({ isActive }) => isActive ? "border-b-2 pb-1 flex flex-col items-center gap-2" : "flex flex-col items-center gap-2"}>
                    <img src="./images/servise.png" alt="menu-icon" className="w-5" />
                    <span className="text-sm">Services</span>
                </NavLink>
            </div>
            {/* <div className="flex flex-col items-center justify-center gap-5 px-4 pb-4">
                <span className="text-sm font-semibold">Follow us on any of our platforms</span>
                <ul className="flex items-center justify-center gap-3">
                    <a href="#"><img src="./images/instagram.svg" alt="instagram-icon" className="w-7" /></a>
                    <a href="#"><img src="./images/facebook.svg" alt="facebook-icon" className="w-9" /></a>
                    <a href="#"><img src="./images/x.svg" alt="x-icon" className="w-8" /></a>
                    <li className="flex flex-col items-center gap-2">
                        <span className=""><img className="w-5" src="./images/phone.png" alt="phone-icon" /></span>
                        <span className="">555-234-542</span>
                    </li>
                </ul>
            </div> */}
        </>
    )
}
