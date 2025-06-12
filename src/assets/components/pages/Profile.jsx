import { Link } from "react-router";
import { useState } from "react";

export default function Register() {
    const [haveAccount, setHaveAccount] = useState(true);

    function toggleAccount() {
        setHaveAccount(!haveAccount)
    }
    return (
        <>
            <div className="bg-white font-Poppins max-w-5xl md:p-4 mx-auto shadow-lg/10 h-full">
                <h1 className="text-sm lg:text-lg mb-4 lg:mb-8">Sign up with our newslatter for more updates on our products and services as well as more access to our products and our 24 hours services</h1>
                <div className="md:flex md:items-center">
                    <img className=" w-full md:w-120 h-100 rounded-lg" src="./images/products/Pineapple.webp" alt="pastry-image" />
                    {haveAccount ?
                        <div className="p-6 md:py-0">
                            <h1 className="font-bold text-2xl flex items-center justify-center my-3">Log In</h1>
                            <form className="flex flex-wrap items-center justify-center gap-8 py-4" action="#">
                                <input type="text" className="w-full h-14 bg-gray-100 rounded-lg p-4 outline-0 border-0" name="login" placeholder="Email or Login ID" />
                                <input type="password" className="w-full h-14 bg-gray-100 rounded-lg p-4 outline-0 border-0" name="password" placeholder="Password" />
                                <button className="w-full h-12 text-white bg-black font-bold text-sm rounded-full">Sign In</button>
                            </form>
                            <p className="text-sm font-semibold mt-4 text-center">
                                Don't have an account? <Link className="underline text-blue-300">
                                    <button onClick={toggleAccount}>Sign up</button>
                                </Link>
                            </p>
                        </div> :
                        <div className="p-6 md:py-0">
                            <h1 className="font-bold text-2xl flex items-center justify-center my-3 md:mt-0 md:mb-2">Log In</h1>
                            <form className="flex flex-wrap items-center justify-center gap-8 md:gap-4 py-4" action="#">
                                <input type="text" className="w-full h-14 md:h-10 bg-gray-100 rounded-lg p-4 outline-0 border-0" name="name" placeholder="Name" />
                                <input type="email" className="w-full h-14 md:h-10 bg-gray-100 rounded-lg p-4 outline-0 border-0" name="email" placeholder="Email" />
                                <input type="password" className="w-full h-14 md:h-10 bg-gray-100 rounded-lg p-4 outline-0 border-0" name="password" placeholder="Password" />
                                <input type="password" className="w-full h-14 md:h-10 bg-gray-100 rounded-lg p-4 outline-0 border-0" name="repassword" placeholder="Confirm Password" />
                                <input type="text" className="w-full h-14 md:h-10 bg-gray-100 rounded-lg p-4 outline-0 border-0" name="loginId" placeholder="Username/Login ID" />
                                <button className="w-full h-12 md:h-8 text-white bg-black font-bold text-sm rounded-full">Sign Up</button>
                            </form>
                            <p className="text-sm font-semibold mt-4 md:mt-1 text-center">
                                Already have an account? <Link className="underline text-blue-300">
                                    <button onClick={toggleAccount}>Sign In</button>
                                </Link>
                            </p>
                        </div>}
                </div>
            </div>
        </>
    )
}
