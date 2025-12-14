import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../context/ChangeLanguageContext';

function HomeComponent() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectCategoryId , setSelectCategoryId] = useState(null)
  const { lang, setLang, t } = useContext(LanguageContext)

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
      <div className='flex items-center justify-between py-7 overflow-scroll gap-3 xl:overflow-hidden'>
        {
          categories.map((el) => (
            <div onClick={() => setSelectCategoryId(el.id)} className='cursor-pointer w-[125px] h-[90px] border-[1px]  border-[#F0F0F0] rounded-[12px] flex flex-col items-center justify-center gap-2 hover:bg-[#F9F9F9] duration-300'>
              <img className='w-[32px] h-[38px]' src={el.icon} alt="rasm" />
              <p className='text-[19px] text-[#191919] hover:text-[#FF7010] duration-200'>{el.title}</p>
            </div>
          ))
        }
      </div>

      <div className='grid grid-cols-4 gap-[30px]'>
        {
          products.filter((p) => p.categoryId === (selectCategoryId)).map((prod) => (
            <div className="max-w-[300px] w-full h-[343px]  rounded-[12px] border-[1px]  border-[#F0F0F0]">
              <div className="relative flex flex-col items-center justify-center  overflow-hidden">
                <div className=''>
                  <img className='w-[300px] h-[280px]' src={prod.image} alt="" />
                </div>
                <div className="px-3">
                  <p className="text-[24px] text-[orangered] font-semibold">{prod.title}</p>
                </div>
              </div>
            </div>

          ))
        }
      </div>

      {categories.map((el) => (
        <div>
          <h1 className='text-[40px] text-[#191919] py-7'>
            {
              products.find((pro) => pro.categoryId === el.id)? el.title : ""
            }
          </h1>
          <div className='grid grid-cols-4 gap-[30px]'>
            {
              products.filter((el1) => el1.categoryId === el.id).map((el) => (
                <div className="max-w-[300px] w-full h-auto rounded-[12px] overflow-hidden border border-[#F0F0F0] bg-white shadow-sm">
                  <div className="relative w-full h-[300px]  bg-contain bg-center bg-no-repeat rounded-t-[12px] transition-transform duration-300 ease-in-out hover:scale-110">
                    <img className='w-full h-[270px]' src={el.image} alt="" />
                  </div>

                  <div className="px-4 pt-4 pb-6">
                    <p className="text-[18px] font-semibold text-[#1A1A1A]">
                      {el.title}
                    </p>
                    <p className="text-[14px] text-[#6B6B6B] mt-1">

                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <button className="cursor-pointer px-4 py-2 bg-[#FF6500] text-white text-[14px] font-semibold rounded-md hover:bg-[#e05500] transition">
                        {t.choose}
                      </button>
                      <p className="text-[18px] font-bold text-[#FF6500]">
                        100000 so'm
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      ))
      }
      
    </section>

  )
}

export default HomeComponent