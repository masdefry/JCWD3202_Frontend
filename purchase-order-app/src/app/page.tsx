import { GrMoney } from "react-icons/gr";
import Sidebar from '@/components/Sidebar'
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <>
      <section className="grid grid-cols-12 h-screen">
        <Sidebar />
        <section id="right" className="col-span-10">
          {/* Header Section */}
          <Header />

          {/* Dashboard Section */}
          <div className="px-5 py-10">
            <h1 className="text-gray-500 text-xl">Hello</h1>
            <h1 className="text-3xl font-bold py-3">Defryan</h1>
            <h1 className="text-gray-500 text-xl">Purwadhika School</h1>
            <div className="border border-2 border-green-700 p-3 rounded-md my-3">
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center text-gray-900">
                  <GrMoney className="text-2xl" />
                  <h1 className="text-xl">Your Credits</h1>
                </div>
                <h1 className="text-2xl font-bold">Rp. 1.000.000</h1>
              </div>
              <div className="flex justify-between items-center py-3 border-b-2 pb-5">
                <h1 className="text-gray-400 text-sm font-light">
                  Updated at Sat 8 Jun 14:15 PM
                </h1>
                <button className="btn rounded-full p-3 bg-green-700 text-white">
                  Top Up
                </button>
              </div>
              <div className="py-5 flex justify-center">
                <h1 className="text-green-700 font-bold">
                  See transaction history
                </h1>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
