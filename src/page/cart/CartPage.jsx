import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/ChangeLanguageContext';

function CartPage() {
    const { cart, addToCart, increase, decrease } = useContext(CartContext);
      const { lang, setLang, t } = useContext(LanguageContext)
    const cartItem = JSON.parse(localStorage.getItem("cart"))
    console.log(cartItem);

    return (
        <section className='bg-[#F9F9F9] pt-40'>
            {cartItem.length > 0 ? (<div className='container mx-auto '>
                
                <div className='flex flex-col items-center gap-3'>
                    <div>
                        <h1 className='text-[40px] text-[#191919] font-bold'>Ваш заказ</h1>
                    </div>
                    {cartItem?.map((item) => (
                        <div className="max-w-[800px] w-full  bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[90px] h-[90px] sm:w-[90px] sm:h-[90px] object-cover rounded-full"
                                />
                                <div className='flex flex-col gap-[0px] sm:flex-row sm:gap-[120px] md:gap-60 lg:gap-80'>
                                        <div className='flex flex-col'>
                                        <h3 className="text-xl font-semibold text-[#191919]">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {item.weight} g
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
                                            {item.basePrice} ₽
                                        </p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
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
            </div>) : (<div className='flex flex-col items-center justify-center pb-20'>
                <div className='flex items-center gap-8 justify-center pb-8'>
                        <h1 className='text-[50px] text-orange-500'><FaShoppingCart /></h1>
                        <h1 className='text-[35px] text-orange-500 font-bold'>{t.basket}</h1>
                </div>
                <div>
                    <Link class="bg-orange-500 cursor-pointer hover:bg-orange-600 transition-colors duration-300 rounded-lg px-6 py-3 text-white font-medium shadow-lg shadow-orange-200" to="/" data-discover="true">{t.basketbtn}</Link>
                </div>
            </div>)}
        </section>
    )
}

export default CartPage