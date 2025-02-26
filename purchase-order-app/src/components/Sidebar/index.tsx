import Image from 'next/image';
import { HiOutlineHome } from "react-icons/hi2";
import { AiOutlineLogout } from "react-icons/ai";
const navigations = [
  { url: "/", icon: <HiOutlineHome className="text-xl" />, title: "Home" },
];

export default function Sidebar() {
  return (
    <section id="left" className="col-span-2 p-6 border-r-2 bg-green-100">
      <div>
        <Image src={"/logo.svg"} width={100} height={100} alt="Logo" />
      </div>
      <div className="py-6 h-[300px] overflow-y-auto">
        {navigations?.map((nav, index) => {
          return (
            <div
              key={index}
              className="flex gap-3 bg-green-700 text-white p-2 rounded-md items-center"
            >
              {nav.icon}
              <h1>{nav.title}</h1>
            </div>
          );
        })}
      </div>
      <div className="bg-green-300 p-2 rounded-md mt-3">
        <h1 className="font-bold">Support</h1>
        <p className="text-sm text-light">support@gmail.com</p>
        <p className="text-sm text-light">+62 21 335891</p>
      </div>
      <div className="flex gap-3 justify-between my-5 border-t-2 border-b-2 py-3">
        <div className="flex gap-3">
          <div className="w-[30px] h-[30px] rounded-full bg-gray-300"></div>
          <div>
            <h1 className="font-bold text-md">Defryan</h1>
            <p className="text-xs">Purwadhika</p>
            <p className="text-xs">Lecturer</p>
          </div>
        </div>
        <div>
          <AiOutlineLogout className="text-2xl" />
        </div>
      </div>
    </section>
  );
}
