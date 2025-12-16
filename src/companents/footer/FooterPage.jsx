import React, { useContext } from "react";
import { LanguageContext } from "../../context/ChangeLanguageContext";

function FooterPage() {
  const { lang, setLang, t } = useContext(LanguageContext);

  return (
    <footer className="bg-white border-t border-[#E5E5E5] py-10">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex flex-col items-center  sm:grid grid-cols-2 lg:grid-cols-4 gap-8">

          {/* LOGO + COPYRIGHT */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/pizza-logo.png" alt="logo" className="w-10 h-10" />
              <p className="text-2xl font-semibold text-[#191919]">{t.appname}</p>
            </div>
            <p className="text-sm text-[#5A5A5A]">
              © 2021 — {t.appname}
            </p>
          </div>

          {/* COMPANY */}
          <div className="space-y-3 hidden sm:block">
            <p className="text-xl font-semibold text-[#191919]">{t.company}</p>
            <p className="text-base text-[#5A5A5A] hover:text-[#FF6500] cursor-pointer">{t.terms}</p>
            <p className="text-base text-[#5A5A5A] hover:text-[#FF6500] cursor-pointer">{t.warranty}</p>
          </div>

          {/* HELP */}
          <div className="space-y-3 hidden sm:block">
            <p className="text-xl font-semibold text-[#191919]">{t.help}</p>
            <p className="text-base text-[#5A5A5A] hover:text-[#FF6500] cursor-pointer">{t.restaurant}</p>
            <p className="text-base text-[#5A5A5A] hover:text-[#FF6500] cursor-pointer">{t.contacts}</p>
            <p className="text-base text-[#5A5A5A] hover:text-[#FF6500] cursor-pointer">{t.support}</p>
            <p className="text-base text-[#5A5A5A] hover:text-[#FF6500] cursor-pointer">{t.trackOrder}</p>
          </div>

          {/* CONTACTS & SOCIAL */}
          <div className="space-y-5">
            <p className="text-xl font-semibold text-[#191919]">{t.contacts}</p>

            {/* PHONE */}
            <div className="flex items-center gap-3">
              <img src="/tel.png" alt="tel" className="w-5 h-5" />
              <p className="text-base text-[#5A5A5A]">+7 (926) 223-10-11</p>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-3">
              <img src="/location1.png" alt="location" className="w-5 h-5" />
              <p className="text-base text-[#5A5A5A]">{t.address}</p>
            </div>

            {/* SOCIAL */}
            <div className="flex items-center gap-5 pt-2">
              <div className="flex items-center gap-2 hover:text-[#FF6500] cursor-pointer">
                <img src="/facebook.png" alt="facebook" className="w-5 h-5" />
                <p className="text-base text-[#5A5A5A]">Facebook</p>
              </div>
              <div className="flex items-center gap-2 hover:text-[#FF6500] cursor-pointer">
                <img src="/instagram.png" alt="instagram" className="w-5 h-5" />
                <p className="text-base text-[#5A5A5A]">Instagram</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
