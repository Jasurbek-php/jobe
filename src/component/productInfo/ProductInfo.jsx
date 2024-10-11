import React from "react";
import './ProductInfo.css';
import One from '../../assets/Screenshot 2024-10-09 175506.png';
import Two from '../../assets/Screenshot 2024-10-09 175458.png';
import Three from '../../assets/Screenshot 2024-10-09 175450.png';

const products = [
    {
        id: 1,
        name: "Neggs",
        image: One,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elite velit facilis odio sed dolores nobis maiores est mollitia itaque beatae dolor veritatis id laudantium.   "
    },
    {
        id: 2,
        name: "Virtual reallik ko'zoynaklari VR Shinecon G15E",
        image: Two,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elite velit facilis odio sed dolores nobis maiores est mollitia itaque beatae dolor veritatis id laudantium.   "
    },
    {
        id: 3,
        name: "TV pristikva Mi TV Stick android smart box",
        image: Three,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elite velit facilis odio sed dolores nobis maiores est mollitia itaque beatae dolor veritatis id laudantium.   "
    },
    {
        id: 4,
        name: "Simsiz universal mikrofon Saramonic BlinkMe U2",
        image: One,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elite velit facilis odio sed dolores nobis maiores est mollitia itaque beatae dolor veritatis id laudantium.   "
    },
    {
        id: 5,
        name: "Saramonic Blink 500 B2 + simsiz mikrofon, universal",
        image: One,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elite velit facilis odio sed dolores nobis maiores est mollitia itaque beatae dolor veritatis id laudantium.   "
    }
];

function ProductInfo() {
    return (
        <div className="ProductInfo">
            <h1 className="header">Product categories</h1>
            <div className="product-info-catalog">
                {products.map((product) => (
                    <div className="product-info-item" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-description">{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductInfo;
