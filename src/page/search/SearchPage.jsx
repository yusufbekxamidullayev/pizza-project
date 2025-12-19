import { useContext } from 'react'
import { LanguageContext } from '../../context/ChangeLanguageContext'
import { CiSearch } from 'react-icons/ci'
  


function SearchPage() {
    const { lang, setLang, t } = useContext(LanguageContext)
    return (
        <div className='container mx-auto'>
            <div className='pt-30'>
                <div class="flex items-center justify-between bg-[white] rounded-lg gap-3 p-3">
                    <input class="border border-gray-200 px-2 py-2   rounded w-full outline-none" placeholder={t.search} type="text">
                    </input>
                    <button class="rounded-lg text-[white] cursor-pointer bg-[#FF7010] px-3 py-3 text-[16px] sm:"><CiSearch /></button>
                </div>
            </div>
        </div>
    )
}

export default SearchPage