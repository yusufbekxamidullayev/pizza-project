import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyImage from "../../companents/lazy-load/LazyLoad";
import { CartContext } from "../../context/CartContext";

function CategoryPage() {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const { cart, addToCart, increase, decrease } = useContext(CartContext);

    async function getProducts() {
        try {
            let res = await axios.get(
                `https://693d1ae6f55f1be79301e90f.mockapi.io/categories/${id}/products`
            );
            setProducts(res.data || []);
        } catch (err) {
            console.log(err);
            setProducts([]); // Xato bo‘lsa ham bo‘sh holat
        }
    }

    useEffect(() => {
        getProducts();
    }, [id]);

    return (
        <div className="container mx-auto  pt-35 pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {(
                    products.map((el) => (
                        <div
                            key={el.id}
                            className="w-full gap-2 flex sm:flex-col items-center justify-between gap-4 p-3 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                        >
                            <MyImage
                                alt={el.title}
                                width="w-[200px] sm:w-full"
                                height="h-auto sm:h-[250px]"
                                src={el.image}
                            />

                            <div className="w-full px-2">
                                <p className="text-[18px] font-semibold text-[#1A1A1A] text-center sm:text-left">
                                    {el.title}
                                </p>
                                <p className="text-[18px] line-clamp-2 text-[#1A1A1A] text-center sm:text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, animi!
                                </p>

                                <div className="flex items-center gap-1 mt-4 sm:gap-3 lg:gap-5 justify-between">
                                    {(cart || []).find((item) => item.id === el.id) ? (
                                        <button className="flex items-center gap-3 cursor-pointer px-4 py-2 bg-[#FFEEE2] text-[#FF7010] text-[12px] font-semibold rounded-md">
                                            <span
                                                onClick={() => decrease && decrease(el)}
                                                className="text-[16px] xl:text-[18px]"
                                            >
                                                -
                                            </span>

                                            <span className="text-[16px] xl:text-[18px]">
                                                {(cart || []).find((item) => item.id === el.id)?.qty ||
                                                    0}
                                            </span>

                                            <span
                                                onClick={() => increase && increase(el)}
                                                className="text-[16px] xl:text-[18px]"
                                            >
                                                +
                                            </span>
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => addToCart && addToCart(el)}
                                            className="cursor-pointer px-4 py-2 bg-[#FF6500] text-white text-[12px] font-semibold rounded-md hover:bg-[#e05500] transition"
                                        >
                                            Выбрать
                                        </button>
                                    )}

                                    <p className="text-[18px] font-bold text-[#FF6500]">
                                        {el.basePrice} ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default CategoryPage;
