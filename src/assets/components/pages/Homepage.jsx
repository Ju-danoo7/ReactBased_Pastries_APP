import { featuredPastries, homeSamples } from "../Details";
import { Link } from 'react-router'

export default function Home() {
    const Pastries = homeSamples.map((pastry) => (
        <div className="shrink-0 flex flex-col gap-3 w-40 h-full" key={pastry.link}>
            <img src={pastry.link} alt="pastry icon" className="h-40 shrink-0 rounded-lg" />
            <p className="text-sm">{pastry.description}</p>
        </div>))

    return (
        <div className="font-Poppins bg-slate-50 min-h-screen scrollbar-hide">
            <div className="relative">
                <img className="w-full"
                    src="./images/HomeImage.png" alt="home page image" />
                <h1
                    className="absolute text-white font-bold top-8 left-6 text-3xl">
                    Indulge in Our Exquisite Pastries
                </h1>
            </div>
            <div className="py-6">
                <h2 className="font-bold text-2xl px-4 mt-3 mb-6">Featured Pastries</h2>
                <div className="flex flex-nowrap gap-3 px-2 overflow-x-scroll scrollbar-hide">
                    {Pastries}
                </div>
            </div>
            <div className="p-4">
                <Link to="cart"
                    className="flex items-center justify-center w-full h-12 bg-amber-700 text-white rounded-lg font-bold text-lg tracking-wide">
                    Order Now
                </Link>
            </div>
            <section className="p-4">
                <h3 className="font-bold text-xl mb-6">Special Offers</h3>
                <div className="flex gap-3 items-center">
                    <div className="flex flex-col gap-2 text-sm">
                        <span className="text-gray-800">Limited Time Offer</span>
                        <span className="font-bold">Enjoy 20% discount on all orders above $50</span>
                        <span className="text-gray-800">Use code: SWEET20</span>
                        <button className="bg-gray-200 px-4 py-2 self-start mt-2 rounded-full">Shop Now</button>
                    </div>
                    <img src="./images/croissant.png" alt="croissant image" />
                </div>
            </section>
        </div >
    );
}
