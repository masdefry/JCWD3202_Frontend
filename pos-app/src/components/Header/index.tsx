import { IoIosArrowRoundBack } from 'react-icons/io';
export default function Header() {
  return (
    <div className='flex items-center justify-between'>
      {/* Breadcrumbs */}
      <div className='flex items-center gap-3'>
        <div className='bg-gray-100 p-1 rounded-lg cursor-pointer'>
          <IoIosArrowRoundBack className='text-xl' />
        </div>
        <div className='breadcrumbs text-sm'>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
            <li>Add Document</li>
          </ul>
        </div>
      </div>
      {/* Search */}
      <label className='input bg-gray-100 rounded-lg'>
        <svg
          className='h-[1em] opacity-50'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <g
            strokeLinejoin='round'
            strokeLinecap='round'
            strokeWidth='2.5'
            fill='none'
            stroke='currentColor'
          >
            <circle
              cx='11'
              cy='11'
              r='8'
            ></circle>
            <path d='m21 21-4.3-4.3'></path>
          </g>
        </svg>
        <input
          type='search'
          className='grow'
          placeholder='Search'
        />
      </label>
    </div>
  );
}
