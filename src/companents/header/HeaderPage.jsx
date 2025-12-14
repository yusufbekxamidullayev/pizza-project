import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { LanguageContext } from '../../context/ChangeLanguageContext';

function HeaderPage() {
    const { lang, setLang, t } = useContext(LanguageContext)
    return (
        <header>
            <div className="container mx-auto">
                <div className='py-3 flex items-center justify-between border-b-[1px] w-full border-[#F0F0F0]'>
                    <div className='flex items-center gap-10'>
                        <div className='flex items-center gap-1'>
                            <img src="/Location.png" alt="location" />
                            <select className='text-[16px]  text-[#191919]' name="" id="">
                                <option value="">Москва</option>
                                <option value="">Тoshkent</option>
                                <option value="">English</option>
                            </select>
                        </div>
                        <p className='text-[16px] text-[#191919]'>{t.checkAddress}</p>
                        <div className='flex items-center gap-1'>
                            <p className='text-[16px] text-[#191919]'>{t.avgDelivery}</p>
                            <p className='text-[16px] text-[#191919] font-bold'>00:24:19</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-10'>
                        <p className='text-[16px] text-[#191919]'>{t.workingHours}</p>
                        <div className='flex items-center gap-1'>
                            <img src="/Account.png" alt="" />
                            <p className='text-[16px] text-[#191919]'>{t.login}</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between py-3 border-b-[1px] w-full border-[#F0F0F0]'>
                    <div className='flex items-center gap-1'>
                        <img src="/pizza-logo.png" alt="" />
                        <p className='text-[18px] text-[#191919]'>{t.appName}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button className='bg-[orangered] flex items-center justify-center gap-2 rounded-[5px] w-[80px] h-[35px] '>
                            <p className='text-[24px] text-[white]'><FaCartShopping /></p>
                            <p className='text-[18px] text-[#FFFFFF]'>0 ₽</p>
                        </button>
                        <select onChange={(e) => setLang(e.target.value)} className='text-[16px] bg-[orangered]  text-[white] rounded-[5px] w-[60px] h-[35px]' name="" id="">
                            <option value="RU">RU</option>
                            <option value="UZ">UZ</option>
                            <option value="EN">EN</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderPage