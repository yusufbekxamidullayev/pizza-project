import React from 'react'

function FooterPage() {
  return (
    <div className='container mx-auto pb-5 mt-15  '>
      <div className='flex justify-between border-t-[1px] border-[#F0F0F0] w-full pt-8'>
        <div>
          <div className='flex items-center gap-2'>
            <img src="/pizza-logo.png" alt="" />
            <p className='text-[22px] text-[#191919]'>Куда пицца</p>
          </div>
          <p className='text-[18px] text-[#191919] pt-40'>© Copyright 2021 — Куда Пицца</p>
        </div>
        <div>
          <p className='text-[22px] text-[#191919] font-semibold'>Куда пицца</p>
          <p className='text-[18px] text-[#191919] pt-5'>О компании</p>
          <p className='text-[18px] text-[#191919] pt-5'>Пользовательское соглашение</p>
          <p className='text-[18px] text-[#191919] pt-5'>Условия гарантии</p>
        </div>
        <div>
          <p className='text-[22px] text-[#191919] font-semibold'>Помощь</p>
          <p className='text-[18px] text-[#191919] pt-5'>Ресторан </p>
          <p className='text-[18px] text-[#191919] pt-5'>Контакты</p>
          <p className='text-[18px] text-[#191919] pt-5'>Поддержка</p>
          <p className='text-[18px] text-[#191919] pt-5'>Отследить заказ</p>
        </div>
        <div>
          <p className='text-[22px] text-[#191919] font-semibold'>Контакты</p>
          <div className='flex items-center gap-2'>
            <img className='pt-5' src="/tel.png" alt="tel" />
            <p className='text-[18px] text-[#191919] pt-5'>+7 (926) 223-10-11</p>
          </div>
          <div className='flex items-center gap-2'>
            <img className='pt-5' src="/location1.png" alt="tel" />
            <p className='text-[18px] text-[#191919] pt-5'>Москва, ул. Юных Ленинцев, д.99</p>
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