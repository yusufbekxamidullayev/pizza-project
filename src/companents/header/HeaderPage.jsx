import React, { useContext, useEffect, useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { LanguageContext } from '../../context/ChangeLanguageContext';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { IoSearchOutline } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';
import { RxPerson } from 'react-icons/rx';

function HeaderPage() {
    const { lang, setLang, t } = useContext(LanguageContext)
    const { cart} = useContext(CartContext)
    const [sum , setSum] = useState(0)

    useEffect(() => {
        setSum(0);
        cart?.forEach((el) => setSum((prev) => prev + el.basePrice*el.qty))

    } , [cart])
    return (
        <header className='fixed z-10 bg-white w-full'>
            <div className="container mx-auto">
                <div className='py-3 flex items-center justify-between border-b-[1px] border-[#F0F0F0]'>
                    <div className='flex items-center gap-10'>
                        <div className='flex items-center gap-1'>
                            <img src="/Location.png" alt="location" />
                            <select className='text-[16px]  text-[#191919]' name="" id="">
                                <option value="">Москва</option>
                                <option value="">Тoshkent</option>
                                <option value="">English</option>
                            </select>
                        </div>
                        <p className='hidden sm:block text-[16px] text-[#191919]'>{t.checkAddress}</p>
                        <div className='flex items-center gap-1'>
                            <p className='hidden md:block text-[16px] text-[#191919]'>{t.avgDelivery}</p>
                            <p className='hidden md:block text-[16px] text-[#191919] font-bold'>00:24:19</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-10'>
                        <p className='hidden sm: xl:block text-[16px] text-[#191919]'>{t.workingHours}</p>
                        <div className='flex items-center gap-1'>
                            <img src="/Account.png" alt="" />
                            <p className='text-[16px] text-[#191919]'>{t.login}</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between py-3 border-b-[1px] w-full border-[#F0F0F0]'>
                    <Link to={"/"} className='flex items-center gap-1'>
                        <img src="/pizza-logo.png" alt="" />
                        <p className='text-[18px] text-[#191919]'>{t.appName}</p>
                    </Link>
                    <div className='flex items-center gap-2'>
                        <Link to={"cart"} className='cursor-pointer bg-[orangered] flex items-center justify-center gap-2 rounded-[5px] px-2 h-[35px] '>
                            <p className='text-[24px] text-[white]'><FaCartShopping /></p>
                            <p className='text-[18px] text-[#FFFFFF]'>{Math.ceil(sum)} ₽</p>
                        </Link>
                        <select onChange={(e) => setLang(e.target.value)} className='cursor-pointer text-[16px] bg-[orangered]  text-[white] rounded-[5px] w-[60px] h-[35px]' name="" id="">
                            <option value="RU">RU</option>
                            <option value="UZ">UZ</option>
                            <option value="EN">EN</option>
                        </select>
                    </div>
                </div>
                <div className='fixed z-10 bg-white w-full bottom-0 left-0 border-t-[1px] px-3 py-[5px] border-[silver] sm:hidden'>
                    <div className='flex items-center justify-between'>
                        <Link to={"/"} className='flex flex-col items-center'>
                            <AiOutlineHome className='text-[gray] text-[22px]' />
                            <span className='text-[gray] text-[12px]'>{t.basketbtn}</span>
                        </Link>
                        <Link to={"/category"} className='flex flex-col items-center'>
                            <BiCategory className='text-[gray] text-[22px]' />
                            <span className='text-[gray] text-[12px]'>{t.category}</span>
                        </Link>
                        <Link to={"/search"}  className='flex flex-col items-center'>
                            <IoSearchOutline className='text-[gray] text-[22px]' />
                            <span className='text-[gray] text-[12px]'>{t.search}</span>
                        </Link>
                        <Link to={"/cart"} className='flex flex-col items-center'>
                            <FiShoppingCart className='text-[gray] text-[22px]' />
                            <span className='text-[gray] text-[12px]'>{t.bask}</span>
                        </Link>
                        <Link to={"/profile"} className='flex flex-col items-center'>
                            <RxPerson className='text-[gray] text-[22px]' />
                            <span className='text-[gray] text-[12px]'>{t.profil}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderPage