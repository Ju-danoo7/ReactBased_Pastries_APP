import { useEffect, useState } from "react"
import { featuredPastries } from "../Details";
import Container from "./Container";
import { useOutletContext } from "react-router";

export default function Order() {
    const [cart, setCart] = useState([]);
    const [value, setValue] = useOutletContext()
    const itemsInCartArr = Object.entries(cart).map(([id, item]) => item.amount)
    const cartItemsnum = itemsInCartArr.reduce((acc, amount) => acc + amount, 0);
    const [Layout, setLayout] = useState(false);
    useEffect(() => {
        setValue(cartItemsnum);
    }, [cartItemsnum])

    function handleAmountChange(id, newAmount) {
        setCart(prev => ({
            ...prev,
            [id]: { ...prev[id], amount: newAmount }
        }));
    }

    function handleCartedChange(id, carted) {
        setCart(prev => ({
            ...prev,
            [id]: { ...prev[id], carted, amount: carted ? 1 : 0 }
        }));
    }
    const total = featuredPastries.reduce((sum, pastry) => {
        const item = cart[pastry.id];
        return sum + (item?.amount || 0) * pastry.price;
    }, 0);

    const selectedItems = featuredPastries.map(
        item => cart[item.id]?.amount > 0 ?
            <div className="flex rounded-md justify-between items-center px-4 w-full text-md" key={item.id}>
                <p className="font-semibold">{item.name}</p>
                <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold"><span className="">{cart[item.id].amount} &times;</span> ${(item.price).toLocaleString("en", { minimumFractionDigits: 2 })}</p>
                    <p className="text-md font-bold">{(cart[item.id].amount * item.price).toLocaleString("en", { minimumFractionDigits: 2 })}</p>
                </div>
            </div> : null
    );
    function handleLayoutChange() {
        setLayout(!Layout);
    }
    function handleLayoutChangeOut() {
        setCart(prev => {
            const newCart = { ...prev };
            featuredPastries.forEach(pastry => {
                newCart[pastry.id] = { ...newCart[pastry.id], amount: 0, carted: false };
            });
            setLayout(false);
            return newCart;
        })
    }

    return (
        <>
            <div className="bg-slate-50 relative p-3 flex flex-col gap-4 min-h-screen font-Poppins">
                <h1 className="font-bold text-2xl pl-8 font-Poppins">Cart Component</h1>
                {featuredPastries.map(pastry => <Container
                    key={pastry.id}
                    image={pastry.image}
                    price={pastry.price}
                    name={pastry.name}
                    id={pastry.id}
                    amount={cart[pastry.id]?.amount || 0}
                    carted={cart[pastry.id]?.carted || false}
                    onAmountChange={handleAmountChange}
                    onCartedChange={handleCartedChange}
                />)}

                {
                    value > 0 ?
                        <div className="m-4 bg-white shadow-md p-4 rounded-md flex flex-col gap-2">
                            {selectedItems}
                            <div className="p-4 flex flex-col gap-2 mx-auto">
                                <div className="flex justify-center gap-4 text-lg">
                                    <p className="font-semibold">Total :</p>
                                    <span className="font-semibold">{cartItemsnum} Items @</span>
                                    <span className="font-bold">${total.toLocaleString("en", { minimumFractionDigits: 2 })}</span>
                                </div>
                            </div>
                            <button onClick={handleLayoutChange}
                                className="bg-amber-600 text-white font-bold text-lg tracking-wide w-full h-12 rounded-lg">
                                Checkout
                            </button>
                        </div>
                        :
                        <p className="text-center text-gray-500 m-4 bg-white shadow-md p-4 rounded-md">Your cart is empty</p>
                }
                {Layout && <div className="absolute inset-0 bg-gray-300/50 z-10">
                    <div className="m-4 bg-white shadow-md p-4 rounded-md flex flex-col gap-2">
                        {selectedItems}
                        <div className="p-4 flex flex-col gap-2 mx-auto">
                            <div className="flex justify-center gap-4 text-lg">
                                <p className="font-semibold">Total :</p>
                                <span className="font-semibold">{cartItemsnum} Items @</span>
                                <span className="font-bold">${total.toLocaleString("en", { minimumFractionDigits: 2 })}</span>
                            </div>
                        </div>
                        <button onClick={handleLayoutChangeOut}
                            className="bg-amber-600 text-white font-bold text-lg tracking-wide w-full h-12 rounded-lg">
                            Confirm Order
                        </button>
                    </div>
                </div>}
            </div>
        </>
    )
}