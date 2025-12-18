import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

function CartPage() {
    const { cart, addToCart, increase, decrease } = useContext(CartContext);
    const cartItem = JSON.parse(localStorage.getItem("cart"))
    console.log(cartItem);

    return (
        <section className='bg-[#F9F9F9] pt-40'>
            {cartItem.length > 0 ? (<div className='container mx-auto '>
                <div>
                    <h1 className='text-[40px] text-[#191919] font-bold'>Ваш заказ</h1>
                </div>
                <div className='flex flex-col items-center'>
                    {cartItem?.map((item) => (
                        <div className="max-w-[800px] w-full  bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[90px] h-[90px] sm:w-[90px] sm:h-[90px] object-cover rounded-full"
                                />
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-[#191919]">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {item.subtitle}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center bg-[#FFF2E8] rounded-lg px-3 py-1 gap-3 text-[#FF6500]">
                                        <span onClick={() => decrease(item)} className="text-sm font-bold">−</span>
                                        <span className="text-base font-semibold">
                                            {cart?.find((el) => el?.id === item.id)?.qty}
                                        </span>
                                        <span onClick={() => increase(item)} className="text-sm font-bold">+</span>
                                    </div>
                                    <p className="text-lg font-bold text-[#FF6500]">
                                        1000 ₽
                                    </p>

                                </div>

                            </div>
                        </div>
                    ))}
                    {/* {
                        selectCategoryId ? products.filter((p) => p.categoryId === (selectCategoryId)).map((prod) => (
                            <div className="flex-shrink-0 w-[330px] sm:w-[250px] sm:w-[400px] flex sm:items-center justify-between gap-3 p-3 bg-white border-gray-200 rounded-lg overflow-hidden border">
                                <img className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]' src={prod.image} alt="" />
                                <div className="flex flex-col">
                                    <p className="font-medium text-[18px] whitespace-nowrap">{prod.title}</p>
                                    <p className='text-[15px] text-[#1A1A1A] text-center sm:text-left sm:text-[18px]  line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima.</p>
                                    <div className="flex items-center gap-1 mt-4 sm:gap-3 lg:gap-5 justify-between">
                                        {
                                            cart.find((item) => item.id === prod.id) ?
                                                <button className='flex items-center gap-3 cursor-pointer px-4 py-2 bg-[#FFEEE2] text-white text-[12px] font-semibold rounded-md'>
                                                    <span onClick={() => decrease(prod)} className='text-[16px] text-[#FF7010] xl:text-[18px]'>-</span>
                                                    <span className='text-[16px] text-[#FF7010] xl:text-[18px]'>{cart.find((el) => el.id === prod.id).qty}</span>
                                                    <span onClick={() => increase(prod)} className='text-[16px] text-[#FF7010] xl:text-[18px]'>+</span>
                                                </button>
                                                : <button
                                                    onClick={() => addToCart(prod)}
                                                    className="cursor-pointer px-4 py-2 bg-[#FF6500] text-white text-[12px] font-semibold rounded-md hover:bg-[#e05500] transition sm:text-[14px]"
                                                >
                                                    {t.choose}
                                                </button>
                                        }
                                        <p className="text-[18px] font-bold text-[#FF6500]">
                                            {prod.basePrice} ₽
                                        </p>
                                    </div>
                                </div>
                            </div>

                        )) : products.filter((el) => el.badge === "popular").map((el1) => (
                            <div className="flex-shrink-0 w-[330px] sm:w-[250px] sm:w-[400px] flex sm:items-center justify-between gap-3 p-3 bg-white border-gray-200 rounded-lg overflow-hidden border">
                                <MyImage alt={el1.title} width={"w-[150px] sm:w-[150px]"} height={"h-[100px]"} src={el1.image} />

                                <div className="flex flex-col">
                                    <p className="font-medium text-[18px] whitespace-nowrap">{el1.title}</p>
                                    <p className='text-[15px] text-[#1A1A1A] text-center sm:text-left sm:text-[18px]  line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima.</p>
                                    <div className="flex items-center gap-1 mt-4 sm:gap-3 lg:gap-5 justify-between">
                                        {
                                            cart.find((item) => item.id === el1.id) ?
                                                <button className='flex items-center gap-3 cursor-pointer px-4 py-2 bg-[#FFEEE2] text-white text-[12px] font-semibold rounded-md'>
                                                    <span onClick={() => decrease(el1)} className='text-[16px] text-[#FF7010] xl:text-[18px]'>-</span>
                                                    <span className='text-[16px] text-[#FF7010] xl:text-[18px]'>{cart.find((el) => el.id === el1.id).qty}</span>
                                                    <span onClick={() => increase(el1)} className='text-[16px] text-[#FF7010] xl:text-[18px]'>+</span>
                                                </button>
                                                : <button
                                                    onClick={() => addToCart(el1)}
                                                    className="cursor-pointer px-4 py-2 bg-[#FF6500] text-white text-[12px] font-semibold rounded-md hover:bg-[#e05500] transition sm:text-[14px]"
                                                >
                                                    {t.choose}
                                                </button>
                                        }
                                        <p className="text-[18px] font-bold text-[#FF6500]">
                                            {el1.basePrice} ₽
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    } */}
                    <div class="flex gap-2 py-4 max-w-[800px] w-full items-center">
                        <input placeholder="Промокод" class="flex-1 border border-gray-300 outline-none rounded-[8px] px-3 py-2 text-[14px]"></input>
                        <button class="w-[40px] h-[40px] bg-orange-500 text-white rounded-[8px] cursor-pointer flex items-center justify-center group">
                            <span class="
                                      inline-block
                                      transition-transform
                                      duration-500
                                      ease-in-out">➜</span>

                        </button>
                    </div>
                </div>
            </div>) : (<div>
                <div className='flex items-center gap-2 justify-center pb-8'>
                        <h1 className='text-[42px] text-[orange] '><FaShoppingCart /></h1>
                        <h1 className='text-[42px] text-[orange] '>Savat bo'sh</h1>
                </div>
            </div>)}
        </section>
    )
}

export default CartPage