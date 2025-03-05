export default function BillDetailPage() {
  return (
    <section className='py-10'>
      <h1 className='text-2xl font-bold'>Order Summary</h1>
      <div className='grid grid-cols-12 gap-3'>
        <div className='col-span-8 p-10 border-2 border-gray-200 my-10 rounded-md shadow-xl'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <div className='p-3 rounded-md bg-pos-primary text-white'></div>
              <h3 className='font-bold text-md'>
                Burger <h1>x1</h1>
              </h3>
            </div>
            <h3 className='text-md'>Rp. 15.000</h3>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <div className='p-3 rounded-md bg-pos-primary text-white'></div>
              <h3 className='font-bold text-md'>
                Burger <h1>x1</h1>
              </h3>
            </div>
            <h3 className='text-md'>Rp. 15.000</h3>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <div className='p-3 rounded-md bg-pos-primary text-white'></div>
              <h3 className='font-bold text-md'>
                Burger <h1>x1</h1>
              </h3>
            </div>
            <h3 className='text-md'>Rp. 15.000</h3>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <div className='p-3 rounded-md bg-pos-primary text-white'></div>
              <h3 className='font-bold text-md'>
                Burger <h1>x1</h1>
              </h3>
            </div>
            <h3 className='text-md'>Rp. 15.000</h3>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <div className='p-3 rounded-md bg-pos-primary text-white'></div>
              <h3 className='font-bold text-md'>
                Burger <h1>x1</h1>
              </h3>
            </div>
            <h3 className='text-md'>Rp. 15.000</h3>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <div className='p-3 rounded-md bg-pos-primary text-white'></div>
              <h3 className='font-bold text-md'>
                Burger <h1>x1</h1>
              </h3>
            </div>
            <h3 className='text-md'>Rp. 15.000</h3>
          </div>

          <div className='border-t my-3'></div>
          <div className='flex justify-between items-center'>
            <h3 className='font-bold text-md'>Tax (10%)</h3>
            <h3 className='text-md font-bold text-pos-primary'>Rp. xxx.xxx</h3>
          </div>
          <div className='flex justify-between items-center'>
            <h3 className='font-bold text-md'>Total</h3>
            <h3 className='text-md font-bold text-pos-primary'>Rp. xxx.xxx</h3>
          </div>
        </div>
        <div className='col-span-4 flex flex-col gap-3 min-h-fit max-h-fit p-10 border-2 border-gray-200 my-10 rounded-md shadow-xl'>
          <div>
            <h1 className='font-bold text-gray-400 text-xl'>Customer Name</h1>
            <h1 className='font-bold'>M Defryan</h1>
          </div>
          <div>
            <h1 className='font-bold text-gray-400 text-xl'>Table Number</h1>
            <h1 className='font-bold'>12</h1>
          </div>
          <div>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Customer Cash</legend>
              <input
                type='text'
                className='input'
                placeholder='Rp.xxx.xxx'
              />
            </fieldset>
          </div>
          <button className='btn bg-pos-primary w-full rounded-lg'>
            Print Receipt
          </button>
        </div>
      </div>
    </section>
  );
}
