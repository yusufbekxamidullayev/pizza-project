import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { LanguageContext } from "../../context/ChangeLanguageContext";

function Profile() {
    const { lang, setLang, t } = useContext(LanguageContext)
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-[#F9F9F9] flex items-center justify-center p-4">
            {user ? (
                <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
                    <div className="flex flex-col items-center gap-4">
                        {/* User Avatar */}
                        <div className="text-[#FF7010] text-[60px] sm:text-[80px]">
                            {user.avatar ? (
                                <img
                                    src={user.avatar}
                                    alt="User Avatar"
                                    className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full object-cover"
                                />
                            ) : (
                                <FaUserCircle />
                            )}
                        </div>

                        {/* User Info */}
                        <h2 className="text-2xl font-bold text-[#191919]">
                            {user.name}
                        </h2>

                        <div className="">
                            <button
                                className="mt-4 bg-white border-[1px] border-[orangered] text-[orangered] font-semibold w-full py-2 rounded-lg hover:bg-[#e05500] transition"
                                onClick={handleLogout}
                            >
                                {t.product}
                            </button>           

                            <button
                                className="mt-4  border-[1px]  text-[red] font-semibold w-full py-2 rounded-lg hover:bg-[#e05500] transition"
                                onClick={handleLogout}
                            >
                                {t.login1}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md text-center">
                    <p className="text-lg text-[#191919] font-semibold mb-4">
                        Siz hali tizimga kirmagansiz
                    </p>
                    <Link
                        to="/"
                        className="bg-[#FF6500] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#e05500] transition"
                    >
                        Login
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Profile;
