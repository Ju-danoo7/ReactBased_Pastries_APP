import { useState } from "react"
import { featuredPastries } from "../Details";
import Container from "./Container";

export default function Order() {
    const [carted, setCarted] = useState(false);

    return (
        <>
            <h1 className="font-bold text-2xl pl-8 font-Poppins">Cart Component</h1>
            {featuredPastries.map(pastry => <Container
                key={pastry.id}
                image={pastry.image}
                price={pastry.price}
            />)
            }
            {
                // carted && <div className="p-4 flex flex-col gap-2 w-64 mx-auto">
                //     <div className="flex justify-between text-sm">
                //         <p className="font-semibold">Pasties</p>
                //         <span className="flex gap-2">
                //             <span className="">Amount:</span>
                //             <span className=" font-bold">Total: ${amount * 3}.00</span>
                //         </span>
                //     </div>
                // </div>
            }
        </>
    )
}