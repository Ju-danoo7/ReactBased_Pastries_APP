import { Produce } from "../Details"

export default function Products() {
    const Productz = Produce.map(item => <div className="shrink-0 flex bg-white flex-col gap-3 rounded-md w-56 h-full shadow-md" key={item.id}>
        <img src={item.image} alt="pastry icon" className="h-40 shrink-0 rounded-lg" />
        <div className="p-2 py-3">
            <p className="font-bold text-sm">{item.name}</p>
            <p className="text-sm line-clamp-4">{item.description}</p>
        </div>
    </div>)

    return (
        <>
            <div className="bg-white py-4 px-4 max-w-5xl mx-auto font-Poppins shadow-lg/10">
                <h1 className="font-bold text-2xl mb-2">Our Products</h1>
                <p className="text-sm md:text-lg font-semibold mb-4">What we offer and more, on request and on limited sales</p>
                <div className="flex flex-wrap justify-center md:justify-between gap-3 md:mx-auto">
                    {Productz}
                </div>
            </div>
        </>
    )
}