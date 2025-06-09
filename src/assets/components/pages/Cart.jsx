import { useState } from "react"

export default function Order() {
    const [carted, setCarted] = useState(false);
    const [amount, setAmount] = useState(0);
    function addAmount() {
        setAmount(prev => prev + 1);
    }
    function reduceAmount() {
        (amount > 0) && setAmount(prev => prev - 1);
    }

    return (
        <>
            <h1 className="font-bold text-2xl pl-8 font-Poppins">Cart Component</h1>
            <div className=" shadow-lg p-2 w-full">
                <div className="flex w-full justify-center items-center">
                    <div className="relative flex w-full justify-center items-center rounded-sm">
                        <img src="./images/products/pasties.webp" alt="pastry image" className="w-full h-75 rounded-md" />
                        {carted ?
                            <div className="flex justify-between items-center px-4 bg-orange-500 rounded-full h-12 w-36 absolute -bottom-6">
                                <img onClick={reduceAmount}
                                    src="./images/minus.png" alt="cart-icon" className="w-5" />
                                <span onChange={() => console.log(amount)}
                                    className="text-lg font-bold">{amount}</span>
                                <img onClick={addAmount}
                                    src="./images/plus.svg" alt="cart-icon" className="w-5" />
                            </div> :
                            <div onClick={() => setCarted(!carted)}
                                className="flex justify-center items-center gap-1 bg-orange-500 rounded-full h-12 w-36 absolute -bottom-6">
                                <span className="text-sm font-semibold">Add to cart</span>
                                <img src="./images/cart.svg" alt="cart-icon" />
                            </div>}
                    </div>
                </div>
                <div className=" flex justify-center flex-col p-3">
                    <h3 className="font-semibold text-sm">Pasties</h3>
                    <h3 className="font-bold text-lg">$<span className="">3</span>.00</h3>
                </div>
            </div>
            {
                carted && <div className="p-4 flex flex-col gap-2 w-64 mx-auto">
                    <div className="flex justify-between text-sm">
                        <p className="font-semibold">Pasties</p>
                        <span className="flex gap-2">
                            <span className="">Amount:{amount}</span>
                            <span className=" font-bold">Total: ${amount * 3}.00</span>
                        </span>
                    </div>
                </div>
            }
        </>
    )
}