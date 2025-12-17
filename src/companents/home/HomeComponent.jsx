import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../context/ChangeLanguageContext';
import { CartContext } from '../../context/CartContext';
import MyImage from '../lazy-load/LazyLoad';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
function HomeComponent() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectCategoryId, setSelectCategoryId] = useState(null)
  const { lang, setLang, t } = useContext(LanguageContext)
  const { cart, addToCart, increase, decrease } = useContext(CartContext);


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
      <div className='pt-30 grid grid-cols-8 gap-35 sm:gap-40 xl:gap- 2xl:gap-2 scrollbar [&::-webkit-scrollbar]:w-0 overflow-x-scroll'>
        {
          categories.map((el) => (
            <div onClick={() => setSelectCategoryId(el.id)} className='w-[130px] sm:w-[150px] h-[84px] sm:h-[104px] flex items-center justify-center border rounded-lg cursor-pointer bg-white border-gray-300 xl:w-[165px]'>
              <div className='flex flex-col items-center'>
                {/* <img className='w-10 h-10' src={el.icon} alt="rasm" /> */}
                <MyImage alt={"category"} width={"w-10"} height={"h-10"} src={el.icon} />
                <p className='pt-0 sm:pt-1 text-[black] hover:text-[#FF7010] duration-200'>{el.title}</p>
              </div>
            </div>
          ))
        }
      </div>

      <div className='flex items-start gap-2 sm:gap-5 overflow-x-scroll scrollbar  [&::-webkit-scrollbar]:w-0 w-full my-1'>
        {
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
              {/* <img className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]' src={el1.image} alt="" /> */}
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
        }
      </div>

      {categories.map((el) => (
        <div>
          <div className='flex items-center justify-between'>
            <h1 className='text-[40px] font-semibold text-[#191919]'>
              {
                products.find((pro) => pro.categoryId === el.id) ? el.title : ""
              }
            </h1>
            <a href={`${el.id}`} className='text-[18px] text-[gray] flex items-center gap-1'>
              Все-{products.find((pro) => pro.categoryId === el.id) ? el.title : ""}
              <FaAngleRight />
            </a>
          </div>
          <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {products
              .filter((el1) => el1.categoryId === el.id)
              .map((el3) => (
                <div
                  key={el3.id}
                  className="w-full gap-2 flex sm:flex-col items-center justify-between gap-4 p-3 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                  {/* <img
                    className="w-[140px] sm:w-full h-auto sm:h-[250px] object-contain"
                    src={el3.image}
                    alt={el3.title}
                  /> */}
                  <MyImage alt={el3.title} width={"w-[200px] sm:w-full"} height={"h-auto sm:h-[250px]"} src={el3.image} />

                  <div className="">
                    <p className="text-[18px] font-semibold text-[#1A1A1A] text-center sm:text-left">
                      {el3.title}
                    </p>
                    <p className='text-[15px] text-[#1A1A1A] text-center sm:text-left sm:text-[18px]  line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima.</p>

                    <div className="flex items-center gap-1 mt-4 sm:gap-3 lg:gap-5 justify-between">
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