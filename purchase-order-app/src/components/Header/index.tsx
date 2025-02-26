import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Header(){
    return(
        <header className="pt-3 pb-6 flex justify-between border-b-2 mx-5">
            <div>
                <div className="breadcrumbs text-xl text-gray-500 flex items-center gap-3">
                <LuLayoutDashboard />
                <ul>
                    <li>
                    <a>Home</a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="flex items-center gap-3 text-2xl text-gray-500">
                <IoMdNotificationsOutline />
                <FaRegCircleUser />
            </div>
        </header>
    )
}