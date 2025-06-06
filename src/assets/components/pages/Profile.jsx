import { Link } from "react-router";
import { useState } from "react";

export default function Register() {
    const [haveAccount, setHaveAccount] = useState(true);

    function toggleAccount() {
        setHaveAccount(!haveAccount)
    };
    return (
        <>
            <div className="">
                <img className=" w-full h-75" src="./images/products/Pineapple.webp" alt="pastry-image" />
                {haveAccount ? <div className="p-6">
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
                    <div className="p-6">
                        <h1 className="font-bold text-2xl flex items-center justify-center my-3">Log In</h1>
                        <form className="flex flex-wrap items-center justify-center gap-8 py-4" action="#">
                            <input type="text" className="w-full h-14 bg-gray-100 rounded-lg p-4 outline-0 border-0" name="login" placeholder="Name" />
                            <input type="text" className="w-full h-14 bg-gray-100 rounded-lg p-4 outline-0 border-0" name="name" placeholder="Name" />
                            <input type="email" className="w-full h-14 bg-gray-100 rounded-lg p-4 outline-0 border-0" name="password" placeholder="Email" />
                            <input type="password" className="w-full h-14 bg-gray-100 rounded-lg p-4 outline-0 border-0" name="password" placeholder="Password" />
                            <input type="password" className="w-full h-14 bg-gray-100 rounded-lg p-4 outline-0 border-0" name="repassword" placeholder="Confirm Password" />
                            <input type="text" className="w-full h-14 bg-gray-100 rounded-lg p-4 outline-0 border-0" name="loginId" placeholder="Username/Login ID" />
                            <button className="w-full h-12 text-white bg-black font-bold text-sm rounded-full">Sign Up</button>
                        </form>
                    </div>}
            </div>
        </>
    )
}