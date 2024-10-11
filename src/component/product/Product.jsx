import React, { useState } from "react";
import "./Product.css"; // yuklangan CSS fayl
import { CiHeart } from "react-icons/ci"; // yurak ikonkasi
import { MdOutlineShoppingCart } from "react-icons/md"; // Savatcha ikonkasi uchun
import { AiFillShopping } from "react-icons/ai";// shop iconkasi uchun
import One from '../../assets/Screenshot 2024-10-09 175506.png';
import Two from '../../assets/Screenshot 2024-10-09 175458.png';
import Three from '../../assets/Screenshot 2024-10-09 175450.png';

const products = [
    {
        id: 1,
        name: "Erkaklar soati Fucda",
        price: "179 000 so`m",
        rating: 4.7,
        reviews: 293,
        image: One,
    },
    {
        id: 2,
        name: "Virtual reallik ko'zoynaklari VR Shinecon G15E",
        price: "299 000 so`m",
        rating: 4.7,
        reviews: 293,
        image: Two,
    },
    {
        id: 3,
        name: "TV pristikva Mi TV Stick android smart box",
        price: "549 000 so`m",
        rating: 4.7,
        reviews: 293,
        image: Three,
    },
    {
        id: 4,
        name: "Simsiz universal mikrofon Saramonic BlinkMe U2",
        price: "2 499 000 so`m",
        rating: 4.7,
        reviews: 293,
        image: Three,

    },
    {
        id: 5,
        name: "Saramonic Blink 500 B2 + simsiz mikrofon, universal",
        price: "1 999 000 so`m",
        rating: 4.7,
        reviews: 293,
        image: Three,

    }
];

function Product() {
    const [wishlist, setWishlist] = useState([]); // Sevimlilar ro'yxati
    const [cart, setCart] = useState([]); // Savatcha
    const [ratings, setRatings] = useState(products.map(product => product.rating)); // Mahsulotlar baholari

    // Mahsulotni sevimlilarga qo'shish
    const toggleWishlist = (id) => {
        if (wishlist.includes(id)) {
            setWishlist(wishlist.filter(item => item !== id)); // O'chirish
        } else {
            setWishlist([...wishlist, id]); // Qo'shish
        }
    };

    // Mahsulotni savatchaga qo'shish
    const toggleCart = (id) => {
        if (cart.includes(id)) {
            setCart(cart.filter(item => item !== id)); // O'chirish
        } else {
            setCart([...cart, id]); // Qo'shish
        }
    };

    // Bahoni yangilash
    const updateRating = (id, newRating) => {
        setRatings(ratings.map((rating, index) => index === id - 1 ? newRating : rating));
    };

    return (
        <div className="product-container">
            <h1 className="header">Top products</h1>
            <div className="product-catalog">
                {products.map((product) => (
                    <div className="catalog-item" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <p className="product-title">{product.name}</p>
                        <p className="product-cost">{product.price}</p>
                        <div className="product-rating-wrapper">
                            <div className="rating-input">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <span
                                        key={star}
                                        onClick={() => updateRating(product.id, star)}
                                        style={{ cursor: 'pointer', color: star <= ratings[product.id - 1] ? 'gold' : 'gray' }} // Bahoni yangilash
                                    >
                                        ⭐
                                    </span>

                                ))}
                                {ratings[product.id - 1]}        {/* Bahoni ko'rsatish */}
                            </div>

                            <span>({product.reviews})</span>
                        </div>
                        <button className="purchase-btn">
                            <AiFillShopping className="shop" />
                            Hozirroq xarid qilish
                        </button>
                        <div className="icon-container">
                            <span
                                className="wishlist-icon"
                                onClick={() => toggleWishlist(product.id)}
                                style={{ color: wishlist.includes(product.id) ? 'red' : 'black' }}
                            >
                                <CiHeart />
                            </span>
                            <span
                                className="cart-icon"
                                onClick={() => toggleCart(product.id)}
                                style={{ color: cart.includes(product.id) ? 'green' : 'black' }}
                            >
                                <MdOutlineShoppingCart />
                            </span>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
