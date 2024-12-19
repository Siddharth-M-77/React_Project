import React, { useState } from "react";

const SearchFunctnality = () => {
    const products = [
        { id: 1, name: "Apple iPhone 14", price: "$999", image: "https://media.extra.com/s/aurora/100322230_800/Apple-iPhone-14-Pro-Max%2C-5G%2C-128GB%2C-Space-Black?locale=en-GB,en-*,*" },
        { id: 2, name: "Samsung Galaxy S23", price: "$849", image: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/01/samsung-galaxy-s23-plus-lavender-render-1.jpg" },
        { id: 3, name: "Sony WH-1000XM5 Headphones", price: "$399", image: "https://m.media-amazon.com/images/I/41qwg67HMlL._AC_SY879_.jpg" },
        { id: 4, name: "Apple MacBook Pro", price: "$1999", image: "https://cdn2.vox-cdn.com/uploads/chorus_asset/file/7390261/vpavic_161031_1256_0264.0.jpg" },
        { id: 5, name: "Dell XPS 13", price: "$1399", image: "https://microless.com/cdn/products/ed1893149ad867b15577c751758393d9-hi.jpg" },
        { id: 6, name: "Samsung 4K UHD TV", price: "$599", image: "https://www.bhphotovideo.com/images/images2500x2500/samsung_qn55q70aafxza_q70a_55_class_hdr_1620612.jpg" },
        { id: 7, name: "Samsung Galaxy S23", price: "$849", image: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/01/samsung-galaxy-s23-plus-lavender-render-1.jpg" },
        { id: 8, name: "Sony WH-1000XM5 Headphones", price: "$399", image: "https://m.media-amazon.com/images/I/41qwg67HMlL._AC_SY879_.jpg" },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm))


    return (
        <div className="max-w-screen-xl mx-auto p-6">
            <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Product Search</h2>

            {/* Search Input */}
            <div className="flex items-center justify-center">
                <input
                    type="text"
                    placeholder="Search products..."
                    onChange={(e) => setSearchTerm(e.target.value)}

                    className=" w-full max-w-xl  p-4 mb-8 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Render Filtered Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition duration-200 hover:scale-105">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover object-center rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                            <p className="text-lg text-blue-600">{product.price}</p>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-xl text-gray-500">No products found!</p>
                )}
            </div>
        </div>
    );
};

export default SearchFunctnality;
