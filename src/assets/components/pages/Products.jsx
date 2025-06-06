import { Produce } from "../Details"

export default function Products() {
    const Productz = Produce.map(item => <div className="shrink-0 flex bg-white flex-col gap-3 rounded-md w-45 h-full shadow-md" key={item.id}>
        <img src={item.image} alt="pastry icon" className="h-40 shrink-0 rounded-lg" />
        <div className="p-2 py-3">
            <p className="font-bold text-sm">{item.name}</p>
            <p className="text-sm line-clamp-4">{item.description}</p>
        </div>
    </div>)

    return (
        <>
            <div className="bg-slate-100 py-4 px-4">
                <p className="text-sm font-semibold mb-4">What we offer and more, on request and on limited sales</p>
                <h1 className="font-bold text-2xl">Our Products</h1>
                <div className="flex flex-wrap justify-center gap-3">
                    {Productz}
                </div>
            </div>
        </>
    )
}