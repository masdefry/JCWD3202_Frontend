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
    </section>
  );
}
