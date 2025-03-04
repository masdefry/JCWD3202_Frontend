import Header from '@/components/Header';
import Sidebar from '../../components/Sidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className='grid grid-cols-12'>
      {/* Section Left */}
      <div className='col-span-2 h-screen max-h-screen border-r-2 border-gray-100 flex flex-col justify-between'>
        <Sidebar />
      </div>

      {/* Section Right */}
      <div className='col-span-10 py-3 px-10'>
        <Header />
        {children}
      </div>
    </section>
  );
}
