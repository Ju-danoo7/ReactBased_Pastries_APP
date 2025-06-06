export default function Services() {
    return (
        <>
            <div className="bg-gray-50">
                <div className="flex items-center relative">
                    <img className="w-full h-85" src="./images/shelfImage.jpg" alt="shelf-image" />
                    <h1 className="absolute text-white font-bold text-4xl left-4 top-4">Our Services</h1>
                </div>
                <div className="flex flex-col gap-5 p-4">
                    <section className=" flex gap-2 shadow-md bg-white rounded-md overflow-hidden ">
                        <img className="w-44 h-44 rounded-md" src="./images/products/menu.jpg" alt="menu-image" />
                        <div className="flex flex-col gap-3 p-3">
                            <h3 className="font-bold text-xl">Menu</h3>
                            <p className="text-sm">
                                Explore our menu of freshly baked pastries, cakes, and more. Each item is crafted with care using the finest ingredients.
                            </p>
                        </div>
                    </section>
                    <section className=" flex gap-2 shadow-md bg-white rounded-md overflow-hidden ">
                        <img className="w-44 h-44 rounded-md" src="./images/products/custom-cakes.webp" alt="custom-image" />
                        <div className="flex flex-col gap-3 p-3">
                            <h3 className="font-bold text-xl">Custom Order</h3>
                            <p className="text-sm line-clamp-6">
                                Have a special occasion? We offer custom orders for cakes and pastries tailored to your preferences. Contact us to discuss your needs.
                            </p>
                        </div>
                    </section>
                    <section className=" flex gap-2 shadow-md bg-white rounded-md overflow-hidden ">
                        <img className="w-44 h-44 rounded-md" src="./images/products/Catering.jpg" alt="custom-image" />
                        <div className="flex flex-col gap-3 p-3">
                            <h3 className="font-bold text-xl">Catering</h3>
                            <p className="text-sm line-clamp-6">
                                Planning an event? Our catering services provide a delightful selection of pastries and desserts to make your gathering memorable.
                            </p>
                        </div>
                    </section>
                    <section className=" flex gap-2 shadow-md bg-white rounded-md overflow-hidden ">
                        <img className="w-44 h-44 rounded-md" src="./images/products/delivery.jpg" alt="custom-image" />
                        <div className="flex flex-col gap-3 p-3">
                            <h3 className="font-bold text-xl">Delivery and Pickup</h3>
                            <p className="text-sm line-clamp-6">
                                Enjoy our pastries from the comfort of your home with our delivery service. You can also opt for pickup at our bakery.
                            </p>
                        </div>
                    </section>
                    <p className="text-sm font-semibold">We are dedicated to making you happy by making that special moment count.
                        Contact us today.
                    </p>
                </div>

            </div>
        </>
    )
}