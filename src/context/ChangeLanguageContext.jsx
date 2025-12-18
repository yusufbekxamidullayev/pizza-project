import React, { createContext, useState } from 'react'

export const LanguageContext = createContext();

const ChangeLanguageContext = ({ children }) => {

    const [lang, setLang] = useState("RU");

    const translations = {
        RU: {
            checkAddress: "Проверить адрес",
            avgDelivery: "Среднее время доставки*:",
            deliveryTime: "00:24:19",
            workingHours: "Время работы: с 11:00 до 23:00",
            login: "Войти в аккаунт",
            appName: "Куда пицца",
            cart: "0 ₽",
            choose: "Выбрать",
            price: "so'm",
            appname: "Куда пицца",
            copyright: "© Copyright",
            company: "О компании",
            terms: "Пользовательское соглашение",
            warranty: "Условия гарантии",
            help: "Помощь",
            restaurant: "Ресторан",
            contacts: "Контакты",
            support: "Поддержка",
            trackOrder: "Отследить заказ",
            phone: "+7 (926) 223-10-11",
            address: "Москва, ул. Юных Ленинцев, д.99",
            facebook: "Facebook",
            instagram: "Instagram",
            basket: "Корзина пуста",
            basketbtn: "Главная страница"
        },
        UZ: {
            checkAddress: "Manzilni tekshirish",
            avgDelivery: "O‘rtacha yetkazib berish vaqti*:",
            deliveryTime: "00:24:19",
            workingHours: "Ish vaqti: 11:00 dan 23:00 gacha",
            login: "Hisobga kirish",
            appName: "Qayerga pizza",
            cart: "0 so'm",
            choose: "Tanlash",
            price: "so‘m",
            appname: "Qayerga pizza",
            copyright: "© Mualliflik huquqi",
            company: "Kompaniya haqida",
            terms: "Foydalanuvchi shartnomasi",
            warranty: "Kafolat shartlari",
            help: "Yordam",
            restaurant: "Restoran",
            contacts: "Kontaktlar",
            support: "Qo‘llab-quvvatlash",
            trackOrder: "Buyurtmani kuzatish",
            phone: "+7 (926) 223-10-11",
            address: "Moskva, ul. Yunix Lenintsev, d.99",
            facebook: "Facebook",
            instagram: "Instagram",
            basket: "Savat bo'sh",
            basketbtn: "Bosh sahifa"
        },
        EN: {
            checkAddress: "Check address",
            avgDelivery: "Average delivery time*:",
            deliveryTime: "00:24:19",
            workingHours: "Working hours: from 11:00 to 23:00",
            login: "Login to account",
            appName: "Where pizza",
            cart: "0 ₽",
            choose: "Select",
            price: "so‘m",
            appname: "Where pizza",
            copyright: "© Copyright",
            company: "About company",
            terms: "User Agreement",
            warranty: "Warranty terms",
            help: "Help",
            restaurant: "Restaurant",
            contacts: "Contacts",
            support: "Support",
            trackOrder: "Track order",
            phone: "+7 (926) 223-10-11",
            address: "Moscow, Yunikh Lenintsev St, 99",
            facebook: "Facebook",
            instagram: "Instagramm",
            basket: "Basket empty",
            basketbtn: "Home"
        }
    }

    const t = translations[lang]
    return (
        <LanguageContext.Provider value={{ lang, setLang , t}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default ChangeLanguageContext
