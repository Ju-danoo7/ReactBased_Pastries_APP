export default function Services() {
    return (
        <>
            <div className="bg-white relative max-w-5xl mx-auto shadow-lg font-Poppins">
                <div className="flex items-center relative md:p-4">
                    <img className="w-full h-85 md:h-100 lg:h-171 md:rounded-lg" src="./images/shelfImage.jpg" alt="shelf-image" />
                    <h1 className="absolute text-white font-bold text-4xl left-4 md:left-8 top-4">Our Services</h1>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-5 md:gap-3 p-4 md:p-3 lg:absolute lg:gap-y-8 lg:top-24">
                    <section className=" flex gap-2 items-center justify-center shadow-md md:w-88 lg:w-120 lg:h-60 lg:p-2 bg-white rounded-md overflow-hidden ">
                        <img className="w-44 lg:w-60 h-44 lg:h-full rounded-md" src="./images/products/menu.jpg" alt="menu-image" />
                        <div className="flex flex-col gap-3 p-3">
                            <h3 className="font-bold text-xl lg:text-2xl">Menu</h3>
                            <p className="text-sm lg:text-lg">
                                Explore our menu of freshly baked pastries, cakes, and more. Each item is crafted with care using the finest ingredients.
                            </p>
                        </div>
                    </section>
                    <section className=" flex gap-2 items-center justify-center shadow-md md:w-88 lg:w-120 lg:h-60 lg:p-2 bg-white rounded-md overflow-hidden ">
                        <img className="w-44 h-44 lg:w-60 lg:h-full rounded-md" src="./images/products/custom-cakes.webp" alt="custom-image" />
                        <div className="flex flex-col gap-3 p-3">
                            <h3 className="font-bold text-xl lg:text-2xl">Custom Order</h3>
                            <p className="text-sm line-clamp-6 lg:text-lg">
                                Have a special occasion? We offer custom orders for cakes and pastries tailored to your preferences. Contact us to discuss your needs.
                            </p>
                        </div>
                    </section>
                    <section className=" flex gap-2 items-center justify-center shadow-md md:w-88 lg:w-120 lg:h-60 lg:p-2 bg-white rounded-md overflow-hidden ">
                        <img className="w-44 h-44 lg:w-60 lg:h-full rounded-md" src="./images/products/Catering.jpg" alt="custom-image" />
                        <div className="flex flex-col gap-3 p-3">
                            <h3 className="font-bold text-xl lg:text-2xl">Catering</h3>
                            <p className="text-sm line-clamp-6 lg:text-lg">
                                Planning an event? Our catering services provide a delightful selection of pastries and desserts to make your gathering memorable.
                            </p>
                        </div>
                    </section>
                    <section className=" flex gap-2 items-center justify-center shadow-md md:w-88 lg:w-120 lg:h-60 lg:p-2 bg-white rounded-md overflow-hidden ">
                        <img className="w-44 h-44 lg:w-60 lg:h-full rounded-md" src="./images/products/delivery.jpg" alt="custom-image" />
                        <div className="flex flex-col gap-3 p-3">
                            <h3 className="font-bold text-xl lg:text-2xl">Delivery and Pickup</h3>
                            <p className="text-sm line-clamp-5 lg:text-lg">
                                Enjoy our pastries from the comfort of your home with our delivery service. You can also opt for pickup at our bakery.
                            </p>
                        </div>
                    </section>
                    <p className="text-sm font-semibold lg:text-lg lg:text-white">We are dedicated to making you happy by making that special moment count.
                        Contact us today.
                    </p>
                </div>

            </div>
        </>
    )
}