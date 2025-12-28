import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/ChangeLanguageContext";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import MyImage from "../lazy-load/LazyLoad";
import { FaAngleRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

import { RotatingLines } from "react-loader-spinner";

function HomeComponent() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectCategoryId, setSelectCategoryId] = useState(null);

  const { t } = useContext(LanguageContext);
  const { cart, addToCart, increase, decrease } = useContext(CartContext);
  const { user, login } = useContext(AuthContext);

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginForm, setLoginForm] = useState({ name: "", password: "" });
  const [pendingProduct, setPendingProduct] = useState(null);

  // GET CATEGORIES
  async function getCategories() {
    try {
      const res = await axios.get(
        "https://693d1ae6f55f1be79301e90f.mockapi.io/categories"
      );
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  // GET PRODUCTS
  async function getProducts() {
    try {
      const res = await axios.get(
        "https://693d1ae6f55f1be79301e90f.mockapi.io/products"
      );
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  // FETCH DATA
  useEffect(() => {
    (async () => {
      setLoading(true);
      await getCategories();
      await getProducts();
      setLoading(false);
    })();
  }, []);

  // IF USER CHANGED & pendingProduct EXISTS -> ADD TO CART
  useEffect(() => {
    if (user && pendingProduct) {
      addToCart(pendingProduct);
      setPendingProduct(null);
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="orangered"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
        <h1 className="text-[orangered] text-[32px]">Fast - Food</h1>
      </div>
    );
  }

  return (
    <section>

      {/* ================= LOGIN FORM MODAL ================= */}
      {showLoginForm && !user && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-[90%] max-w-sm">
            <h2 className="text-lg font-semibold text-center mb-4">
              {t.choose} / Login
            </h2>

            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 px-3 py-2 rounded w-full mb-2"
              value={loginForm.name}
              onChange={(e) =>
                setLoginForm({ ...loginForm, name: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Your password"
              className="border border-gray-300 px-3 py-2 rounded w-full mb-2"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
            />

            <button
              className="bg-[#FF6500] text-white px-4 py-2 rounded w-full"
              onClick={() => {
                login(loginForm.name, loginForm.password);
                setShowLoginForm(false);
              }}
            >
              {t.choose}
            </button>
          </div>
        </div>
      )}

      {/* ================= CATEGORY BAR ================= */}
      <div className="pt-30 grid grid-cols-8 gap-35 sm:gap-40 xl:gap- 2xl:gap-2 scrollbar [&::-webkit-scrollbar]:w-0 overflow-x-scroll">
        {categories.map((el) => (
          <div
            key={el.id}
            onClick={() => setSelectCategoryId(el.id)}
            className="w-[130px] sm:w-[150px] h-[84px] sm:h-[104px] flex items-center justify-center border rounded-lg cursor-pointer bg-white border-gray-300 xl:w-[165px]"
          >
            <div className="flex flex-col items-center">
              <MyImage alt={el.title} width={"w-10"} height={"h-10"} src={el.icon} />
              <p className="pt-0 sm:pt-1 text-black hover:text-[#FF7010] duration-200">
                {el.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= SEARCH INPUT ================= */}
      <div className="flex items-center justify-between bg-white rounded-lg gap-3 p-3 my-3">
        <input
          className="border border-gray-200 px-2 py-2 rounded w-full outline-none"
          placeholder={t.search}
          type="text"
        />
        <button className="rounded-lg text-white bg-[#FF7010] px-3 py-3 text-[16px]">
          <CiSearch />
        </button>
      </div>

      {/* ================= PRODUCTS ================= */}

      <div className="flex items-start gap-2 sm:gap-5 overflow-x-scroll scrollbar [&::-webkit-scrollbar]:w-0 w-full my-1">
        {(
          selectCategoryId
            ? products.filter((p) => p.categoryId === selectCategoryId)
            : products.filter((p) => p.badge === "popular")
        ).slice(0, 8).map((prod) => (
          // show 8 in top list
          <div
            key={prod.id}
            className="flex-shrink-0 w-[330px] sm:w-[250px] sm:w-[400px] flex sm:items-center justify-between gap-3 p-3 bg-white border-gray-200 rounded-lg overflow-hidden border"
          >
            <MyImage
              alt={prod.title}
              width={"w-[150px] sm:w-[150px]"}
              height={"h-[100px]"}
              src={prod.image}
            />

            <div className="flex flex-col">
              <p className="font-medium text-[18px] whitespace-nowrap">{prod.title}</p>
              <p className="text-[15px] text-[#1A1A1A] text-center sm:text-left sm:text-[18px]  line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="flex items-center gap-1 mt-4 sm:gap-3 lg:gap-5 justify-between">
                {cart.find((item) => item.id === prod.id) ? (
                  <button className="flex items-center gap-3 cursor-pointer px-4 py-2 bg-[#FFEEE2] text-white text-[12px] font-semibold rounded-md">
                    <span onClick={() => decrease(prod)} className="text-[16px] text-[#FF7010] xl:text-[18px]">-</span>
                    <span className="text-[16px] text-[#FF7010] xl:text-[18px]">
                      {cart.find((el) => el.id === prod.id).qty}
                    </span>
                    <span onClick={() => increase(prod)} className="text-[16px] text-[#FF7010] xl:text-[18px]">+</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (user) {
                        addToCart(prod);
                      } else {
                        setPendingProduct(prod);
                        setShowLoginForm(true);
                      }
                    }}
                    className="cursor-pointer px-4 py-2 bg-[#FF6500] text-white text-[12px] font-semibold rounded-md hover:bg-[#e05500] transition sm:text-[14px]"
                  >
                    {t.choose}
                  </button>
                )}
                <p className="text-[18px] font-bold text-[#FF6500]">{prod.basePrice} ₽</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CATEGORY SECTIONS (4 PRODUCTS EACH) ================= */}
      {categories.map((el) => {
        const items = products
          .filter((p) => p.categoryId === el.id)
          .slice(0, 4); // 🔥 show only 4 items

        if (items.length === 0) return null;

        return (
          <div key={`cat-${el.id}`} className="mt-6">
            <div className="flex items-center justify-between">
              <h1 className="text-[40px] font-semibold text-[#191919]">{el.title}</h1>
              <a href={`${el.id}`} className="text-[18px] text-gray-500 flex items-center gap-1">
                Все-{el.title} <FaAngleRight />
              </a>
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {items.map((el3) => (
                <div
                  key={el3.id}
                  className="w-full flex sm:flex-col items-center justify-between gap-4 p-3 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                  <MyImage
                    alt={el3.title}
                    width={"w-[200px] sm:w-full"}
                    height={"h-auto sm:h-[250px]"}
                    src={el3.image}
                  />

                  <div className="flex flex-col w-full">
                    <p className="text-[18px] font-semibold text-[#1A1A1A] text-center sm:text-left">
                      {el3.title}
                    </p>
                    <p className="text-[15px] text-[#1A1A1A] text-center sm:text-left sm:text-[18px]  line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <div className="flex items-center gap-1 mt-4 sm:gap-3 lg:gap-5 justify-between">
                      {cart.find((item) => item.id === el3.id) ? (
                        <button className="flex items-center gap-3 cursor-pointer px-4 py-2 bg-[#FFEEE2] text-white text-[12px] font-semibold rounded-md">
                          <span onClick={() => decrease(el3)} className="text-[16px] text-[#FF7010] xl:text-[18px]">-</span>
                          <span className="text-[16px] text-[#FF7010] xl:text-[18px]">
                            {cart.find((el) => el.id === el3.id).qty}
                          </span>
                          <span onClick={() => increase(el3)} className="text-[16px] text-[#FF7010] xl:text-[18px]">+</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            if (user) {
                              addToCart(el3);
                            } else {
                              setPendingProduct(el3);
                              setShowLoginForm(true);
                            }
                          }}
                          className="cursor-pointer px-4 py-2 bg-[#FF6500] text-white text-[12px] font-semibold rounded-md hover:bg-[#e05500] transition sm:text-[14px]"
                        >
                          {t.choose}
                        </button>
                      )}
                      <p className="text-[13px] font-bold text-[#FF6500] sm:text-[18px]">{el3.basePrice} ₽</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default HomeComponent;
