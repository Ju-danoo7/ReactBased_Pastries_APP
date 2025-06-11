import { useEffect, useState } from "react";

export default function Container(props) {
    const [carted, setCarted] = useState(false);
    const [amount, setAmount] = useState(0);
    const [arr, setArr] = useState([]);

    useEffect(() => {

    }, [])
    function addAmount() {
        setAmount(prev => prev + 1);
    }
    function reduceAmount() {
        (amount > 0) && setAmount(prev => prev - 1);
    }

    return (
        <>
            <div id={props.id} className=" shadow-lg p-2 w-full">
                <div className="flex w-full justify-center items-center">
                    <div className="relative flex w-full justify-center items-center rounded-sm">
                        <img src={props.image} alt="pastry image" className="w-full h-75 rounded-md" />
                        {carted ?
                            <div className="flex justify-between items-center px-4 bg-orange-500 rounded-full h-12 w-36 absolute -bottom-6">
                                <img onClick={reduceAmount}
                                    src="./images/minus.png" alt="cart-icon" className="w-5" />
                                <span
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
                    <h3 className="font-semibold text-sm">{props.name}</h3>
                    <h3 className="font-bold text-lg">$<span className="">{props.price}</span>.00</h3>
                </div>
            </div>
        </>
    )
}