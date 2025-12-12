const PizzaCard = ({ src, title, subtitle, price }) => {
    return (
        <div className="max-w-[300px] w-full h-auto rounded-[12px] border border-[#F0F0F0] bg-white shadow-sm">
            <div
                className="relative w-full h-[300px]  bg-contain bg-center bg-no-repeat rounded-t-[12px] transition-transform duration-300 ease-in-out hover:scale-110"
                style={{ backgroundImage: `url(${src})` }}
            ></div>

            <div className="px-4 pt-4 pb-6">
                <p className="text-[18px] font-semibold text-[#1A1A1A]">
                    {title}
                </p>
                <p className="text-[14px] text-[#6B6B6B] mt-1">
                    {subtitle}
                </p>

                <div className="flex items-center justify-between mt-4">
                    <button className="cursor-pointer px-4 py-2 bg-[#FF6500] text-white text-[14px] font-semibold rounded-md hover:bg-[#e05500] transition">
                        Выбрать
                    </button>
                    <p className="text-[18px] font-bold text-[#FF6500]">
                        {price} 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;
