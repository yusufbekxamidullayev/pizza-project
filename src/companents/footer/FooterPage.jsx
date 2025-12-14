import React, { useContext } from 'react'
import { LanguageContext } from '../../context/ChangeLanguageContext'

function FooterPage() {
  const { lang, setLang, t } = useContext(LanguageContext)
  return (
    <div className='container mx-auto pb-5 mt-15'>
      <div className='flex justify-between border-t-[1px] border-[#F0F0F0] w-full pt-8'>
        <div>
          <div className='flex items-center gap-2'>
            <img src="/pizza-logo.png" alt="" />
            <p className='text-[22px] text-[#191919]'>{t.appname}</p>
          </div>
          <p className='text-[18px] text-[#191919] pt-40'>© Copyright 2021 — Куда Пицца</p>
        </div>
        <div>
          <p className='text-[22px] text-[#191919] font-semibold'>{t.appname}</p>
          <p className='text-[18px] text-[#191919] pt-5'>{t.company}</p>
          <p className='text-[18px] text-[#191919] pt-5'>{t.terms}</p>
          <p className='text-[18px] text-[#191919] pt-5'>{t.warranty}</p>
        </div>
        <div>
          <p className='text-[22px] text-[#191919] font-semibold'>{t.help}</p>
          <p className='text-[18px] text-[#191919] pt-5'>{t.restaurant} </p>
          <p className='text-[18px] text-[#191919] pt-5'>{t.contacts}</p>
          <p className='text-[18px] text-[#191919] pt-5'>{t.support}</p>
          <p className='text-[18px] text-[#191919] pt-5'>{t.trackOrder}</p>
        </div>
        <div>
          <p className='text-[22px] text-[#191919] font-semibold'>{t.contacts}</p>
          <div className='flex items-center gap-2'>
            <img className='pt-5' src="/tel.png" alt="tel" />
            <p className='text-[18px] text-[#191919] pt-5'>+7 (926) 223-10-11</p>
          </div>
          <div className='flex items-center gap-2'>
            <img className='pt-5' src="/location1.png" alt="tel" />
            <p className='text-[18px] text-[#191919] pt-5'>{t.address}</p>
          </div>
          <div className='flex items-center gap-5'>
            <div className='flex items-center gap-2'>
              <img className='pt-5' src="/facebook.png" alt="tel" />
              <p className='text-[18px] text-[#191919] pt-5'>Facebok</p>
            </div>
            <div className='flex items-center gap-2'>
              <img className='pt-5' src="/instagram.png" alt="tel" />
              <p className='text-[18px] text-[#191919] pt-5'>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterPage