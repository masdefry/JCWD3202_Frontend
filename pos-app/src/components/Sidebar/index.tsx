'use client';
import { LuShoppingCart } from 'react-icons/lu';
import { IoFastFoodOutline, IoReceiptOutline } from 'react-icons/io5';
import { VscSettings } from 'react-icons/vsc';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  {
    icon: <IoFastFoodOutline className='text-xl' />,
    title: 'Food & Drink',
    href: '/dashboard',
  },
  {
    icon: <IoReceiptOutline className='text-xl' />,
    title: 'Bills',
    href: '/dashboard/bills',
  },
  {
    icon: <VscSettings className='text-xl' />,
    title: 'Settings',
    href: '/settings',
  },
];

export default function Sidebar() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <>
      <div>
        {/* text: Smart POS */}
        <div className='flex gap-3 items-center text-pos-secondary justify-center p-3'>
          <div className='p-2 rounded-full bg-gray-100'>
            <LuShoppingCart className='text-xl bg-gray-100' />
          </div>
          <h1 className='font-bold text-lg'>Smart Point of Sale</h1>
        </div>

        {/* Nav Link */}
        <div className='flex flex-col gap-3 p-5'>
          {nav.map((link, index) => (
            <Link href={link.href} key={index}>
              <div className={`flex items-center gap-3 p-2 ${pathName === link.href? 'bg-pos-primary':''} rounded-xl`}>
                {link.icon}
                <h1 className='text-md font-semibold'>{link.title}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='p-5'>
        <div className='flex flex-col items-center rounded-md shadow-md p-3 gap-2'>
          <div className='p-5 rounded-full bg-pos-primary'></div>
          <h1 className='text-2xl font-semibold'>Aboy Pujianto</h1>
          <p className='text-sm text-gray-300'>Managers</p>
          <button className='bg-gray-100 py-1 w-full rounded-md'>
            Open Profile
          </button>
        </div>
        <h1 className='text-md text-gray-300 text-center mt-5'>
          &copy; 2021 Smart Point of Sale
        </h1>
      </div>
    </>
  );
}
