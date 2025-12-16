import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../context/ChangeLanguageContext';
import { CartContext } from '../../context/CartContext';

function HomeComponent() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [selectCategoryId, setSelectCategoryId] = useState(null)
  const { lang, setLang, t } = useContext(LanguageContext)
  const { cart , addToCart , increase , decrease} = useContext(CartContext);
  

  async function getCategories() {
    try {
      let res = await axios.get("https://693d1ae6f55f1be79301e90f.mockapi.io/categories");
      setCategories(res.data)

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  async function getProducts() {
    try {
      let res = await axios.get("https://693d1ae6f55f1be79301e90f.mockapi.io/products");
      setProducts(res.data)

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

 

  return (
    <section>
      <div className='pt-30 grid grid-cols-8 gap-35 sm:gap-40 xl:gap-2 2xl:gap-2 scrollbar [&::-webkit-scrollbar]:w-0 overflow-x-scroll'>
        {
          categories.map((el) => (
            <div onClick={() => setSelectCategoryId(el.id)} className='w-[130px] sm:w-[150px] h-[84px] sm:h-[104px] flex items-center justify-center border rounded-lg cursor-pointer bg-white border-gray-300'>
              <div className='flex flex-col items-center'>
                <img className='w-10 h-10' src={el.icon} alt="rasm" />
                <p className='pt-0 sm:pt-1 text-[black] hover:text-[#FF7010] duration-200'>{el.title}</p>
              </div>
            </div>
          ))
        }
      </div>

      <div className='flex items-start gap-2 sm:gap-5 overflow-x-scroll scrollbar  [&::-webkit-scrollbar]:w-0 w-full py-3'>

        {
          products.filter((p) => p.categoryId === (selectCategoryId)).map((prod) => (
            <div className="flex-shrink-0 w-[330px] sm:w-[250px] sm:w-[310px] flex sm:flex-col items-center justify-between gap-3 p-3 bg-white border-gray-200 rounded-lg overflow-hidden border">
              <img className='w-[100px] sm:w-full h-auto sm:h-[250px]' src={prod.image} alt="" />
              <div className="flex flex-col items-center">
                <p className="font-medium text-[18px] whitespace-nowrap">{prod.title}</p>
                <div className="flex items-center gap-9 mt-4">
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

          ))
        }
      </div>

      {categories.map((el) => (
        <div>
          <h1 className='text-[40px] text-[#191919] pt-2'>
            {
              products.find((pro) => pro.categoryId === el.id) ? el.title : ""
            }
          </h1>
          <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {products
              .filter((el1) => el1.categoryId === el.id)
              .map((el3) => (
                <div
                  key={el3.id}
                  className="w-full gap-2 flex sm:flex-col items-center justify-between gap-4 p-3 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                  <img
                    className="w-[140px] sm:w-full h-auto sm:h-[250px] object-contain"
                    src={el3.image}
                    alt={el3.title}
                  />

                  <div className="">
                    <p className="text-[18px] font-semibold text-[#1A1A1A] text-center sm:text-left">
                      {el3.title}
                    </p>

                    <div className="flex items-center gap-1 mt-4 sm:gap-3 lg:gap-5">
                      {
                        cart.find((item) => item.id === el3.id) ? 
                          <button className='flex items-center gap-3 cursor-pointer px-4 py-2 bg-[#FFEEE2] text-white text-[12px] font-semibold rounded-md'>
                          <span onClick={() => decrease(el3)} className='text-[16px] text-[#FF7010] xl:text-[18px]'>-</span>
                          <span className='text-[16px] text-[#FF7010] xl:text-[18px]'>{cart.find((el) => el.id === el3.id).qty}</span>
                          <span onClick={() => increase(el3)} className='text-[16px] text-[#FF7010] xl:text-[18px]'>+</span>
                        </button>
 : <button
                          onClick={() => addToCart(el3)}
                          className="cursor-pointer px-4 py-2 bg-[#FF6500] text-white text-[12px] font-semibold rounded-md hover:bg-[#e05500] transition sm:text-[14px]"
                        >
                          {t.choose}
                        </button>
                      }
                      
                      <p className="text-[13px] font-bold text-[#FF6500] sm:text-[18px]">
                        {el3.basePrice} ₽
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
      ))
      }
    </section>
  )
}

export default HomeComponent