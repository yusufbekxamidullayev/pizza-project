import React from "react";
import Slider from "react-slick";

function MultipleItems({
    products,
    selectCategoryId,
    cart,
    increase,
    decrease,
    addToCart,
    t,
}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    const renderProductCard = (item) => {
        const cartItem = cart.find((c) => c.id === item.id);

        return (
            <div
                key={item.id}
                className="flex-shrink-0 w-[330px] sm:w-[310px] flex sm:flex-col items-center justify-between gap-3 p-3 bg-white border-gray-200 rounded-lg overflow-hidden border"
            >
                <img
                    className="w-[100px] sm:w-full h-auto sm:h-[250px]"
                    src={item.image}
                    alt={item.title}
                />

                <div className="flex flex-col w-full">
                    <p className="font-medium text-[18px] whitespace-nowrap">
                        {item.title}
                    </p>

                    <p className="text-[15px] text-[#1A1A1A] text-center sm:text-left sm:text-[18px] line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <div className="flex items-center gap-1 mt-4 sm:gap-3 lg:gap-5 justify-between w-full">
                        {cartItem ? (
                            <div className="flex items-center gap-3 px-4 py-2 bg-[#FFEEE2] text-white text-[12px] font-semibold rounded-md">
                                <span
                                    onClick={() => decrease(item)}
                                    className="text-[16px] text-[#FF7010] xl:text-[18px] cursor-pointer"
                                >
                                    -
                                </span>
                                <span className="text-[16px] text-[#FF7010] xl:text-[18px]">
                                    {cartItem.qty}
                                </span>
                                <span
                                    onClick={() => increase(item)}
                                    className="text-[16px] text-[#FF7010] xl:text-[18px] cursor-pointer"
                                >
                                    +
                                </span>
                            </div>
                        ) : (
                            <button
                                onClick={() => addToCart(item)}
                                className="cursor-pointer px-4 py-2 bg-[#FF6500] text-white text-[12px] font-semibold rounded-md hover:bg-[#e05500] transition sm:text-[14px]"
                            >
                                {t.choose}
                            </button>
                        )}

                        <p className="text-[18px] font-bold text-[#FF6500]">
                            {item.basePrice} ₽
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    const filteredProducts = selectCategoryId
        ? products.filter((p) => p.categoryId === selectCategoryId)
        : products.filter((p) => p.badge === "NEW");

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {filteredProducts.map((item) => renderProductCard(item))}
            </Slider>
        </div>
    );
}

export default MultipleItems;
