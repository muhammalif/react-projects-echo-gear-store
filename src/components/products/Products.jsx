import React from "react";

import Img1 from '../../assets/products 1/keyboard/keyboard1.jpg'
import Img2 from '../../assets//products 1/keyboard/keyboard2.jpg'
import Img3 from '../../assets//products 1/mouse/mouse1.jpg'
import Img4 from '../../assets//products 1/mouse/mouse2.jpg'
import Img5 from '../../assets//products 1/headphones/headphone1.jpg'
import Img6 from '../../assets//products 1/headphones/headphone2.jpg'

import { TiStarFullOutline } from "react-icons/ti";

import Button from '../buttons/Button'

const ProductsData = [
    {
        id: 1,
        img: Img1,
        Title: "Vortex GT-65",
        rating: 4.2,
        brand: 'Vortex',
        aosDelay: '800',
    },
    {
        id: 2,
        img: Img2,
        Title: "Daxa M64",
        rating: 3.5,
        brand: 'Daxa',
        aosDelay: '850',
    },
    {
        id: 3,
        img: Img3,
        Title: "Vortex Inno X2",
        rating: 4.6,
        brand: 'Vortex',
        aosDelay: '900',
    },
    {
        id: 4,
        img: Img4,
        Title: "Pressplay Icarus",
        rating: 4.1,
        brand: 'Pressplay',
        aosDelay: '950',
    },
    {
        id: 5,
        img: Img5,
        Title: "Rexus X6 Pro",
        rating: 4.0,
        brand: 'Rexus',
        aosDelay: '1000',
    },  
    {
        id: 6,
        img: Img6,
        Title: "Marshall Monitor",
        rating: 4.3,
        brand: 'Marshall',
        aosDelay: '1050',
    },
]

const Products = () => {
    return (
        <div className="mt-14 mb-12">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos='fade-up' className="text-md text-primary">Top Selling Products for You</p>
                    <h1 data-aos='fade-up' className="text-4xl font-bold">Products</h1>
                    <p data-aos='fade-up'className="text-sm text-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Expedita impedit ipsa pariatur? Voluptatum, esse sit,
                        officiis voluptas quaerat cum quibusdam, odit fugiat
                        nemo modi porro veniam enim architecto maxime aperiam.
                    </p>
                </div>
                {/* Body Section */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 lg-grid-cols-5 place-items-center gap-5">
                        {/* Card Section */}
                        {ProductsData.map((data) => (
                            <div data-aos='fade-up' data-aos-delay={data.aosDelay} key={data.id}>
                                <img src={data.img} alt="" className="h-[200px] w-[180px] object-cover rounded-md" />
                                <div>
                                    <h3 className="font-semibold">{data.Title}</h3>
                                    <p className="text-sm text-gray-600">{data.brand}</p>
                                    <div className="flex item-center gap-2">
                                        <TiStarFullOutline className="text-yellow-400 mt-1" />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Button />
            </div>
        </div>
    )
}

export default Products