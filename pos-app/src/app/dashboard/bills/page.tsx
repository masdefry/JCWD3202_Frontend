export default function BillsPage() {
  return (
    <section className='py-10'>
      <h1 className='text-2xl font-bold'>Order List</h1>

      <div className='overflow-x-auto my-5 rounded-box border border-base-content/5 bg-base-100'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Customer Name</th>
              <th>Table Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>M Defryan</td>
              <td>12</td>
              <td>
                <button className='btn bg-pos-primary px-5 py-2 rounded-xl'>
                  Payment
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className='grid grid-cols-12 gap-3'>
        <div className='col-span-4 p-10 border-2 border-gray-200 my-10 rounded-md shadow-xl'>
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
        </div>
        <div className='col-span-8 p-10 border-2 border-gray-200 my-10 rounded-md shadow-xl'></div>
      </div> */}
    </section>
  );
}
