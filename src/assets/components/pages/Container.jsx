
export default function Container(props) {


    function addAmount() {
        props.onAmountChange(props.id, props.amount + 1);
    }
    function reduceAmount() {
        if (props.amount > 1) {
            props.onAmountChange(props.id, props.amount - 1);
        } else {
            props.onCartedChange(props.id, false);
        }
    }

    return (
        <>
            <div id={props.id} className=" shadow-lg p-2 w-full">
                <div className="flex w-full justify-center items-center">
                    <div className="relative flex w-full justify-center items-center rounded-sm">
                        <img src={props.image} alt="pastry image" className="w-full h-75 rounded-md" />
                        {props.carted ?
                            <div className="flex justify-between items-center px-4 bg-orange-500 rounded-full h-10 w-34 absolute -bottom-4">
                                <img onClick={reduceAmount}
                                    src="./images/minus.png" alt="cart-icon" className="w-5" />
                                <span
                                    className="text-lg font-bold">{props.amount}</span>
                                <img onClick={addAmount}
                                    src="./images/plus.svg" alt="cart-icon" className="w-5" />
                            </div> :
                            <div onClick={() => props.onCartedChange(props.id, true)}
                                className="flex justify-center items-center gap-1 bg-orange-500 rounded-full h-10 w-34 absolute -bottom-6">
                                <span className="text-sm font-semibold">Add to cart</span>
                                <img src="./images/cart.svg" alt="cart-icon" />
                            </div>}
                    </div>
                </div>
                <div className=" flex justify-center flex-col p-3">
                    <h3 className="font-bold text-md">{props.name}</h3>
                    <h3 className="font-bold text-lg">${(props.price).toLocaleString("en", { minimumFractionDigits: 2 })}</h3>
                </div>
            </div>
        </>
    )
}