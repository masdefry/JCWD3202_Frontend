'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { BiSolidMinusCircle } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { createOrderListSchema } from '@/features/dashboard/schemas/createOrderListSchema';

export default function DashboarPage() {
  const [products, setProducts] = useState([]);
  const [orderList, setOrderList] = useState<any[]>([]); // [{name, price, imageUrl, calorie, objectId, category, quantity}]

  const handleGetProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostOrderList = async ({ customerName, tableNumber }: any) => {
    try {
      await axios.post('http://localhost:3000/api/order-list', {
        customerName,
        tableNumber,
        itemList: orderList,
        total: orderList.reduce(
          (acc, curr) => acc + (curr.price * curr.quantity),
          0
        ),
      });
    } catch (error) {
      console.log(error);
    }
  };

  // {name, price, imageUrl, calorie, category, objectId}
  const handleAddOrder = (product: any) => {
    if (orderList.length === 0) {
      // Jika Order List Masih Kosong (Chasier Menambahkan Product Pertama Kali)
      setOrderList([{ ...product, quantity: 1 }]);
    } else {
      // Ketika Order List Sudah Ada Isinya
      const currentOrderList = [...orderList];
      const indexOfProduct = orderList.findIndex((order) => {
        return order.name === product.name;
      });

      if (indexOfProduct > -1) {
        // Si Product Sudah Ada di Order List (Mengupdate Quantity)
        currentOrderList[indexOfProduct].quantity += 1;
        setOrderList(currentOrderList);
      } else if (indexOfProduct === -1) {
        // Si Product Belum Ada di Order List
        setOrderList([...orderList, { ...product, quantity: 1 }]);
      }
    }

    toast.success('Product Added to Order List');
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <div className='py-10 overflow-y-auto max-h-[80vh]'>
      <ToastContainer />
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Food & Drink</h1>
        <button
          onClick={() => document.getElementById('my_modal_1').showModal()}
          className='btn bg-pos-primary px-5 py-2 rounded-xl'
        >
          Order List{' '}
          <div className='bg-black py-1 px-2 rounded-md text-white text-xs'>
            0 Menus
          </div>
        </button>
        <dialog
          id='my_modal_1'
          className='modal'
        >
          <div className='modal-box'>
            <h3 className='font-bold text-lg'>Order List</h3>
            <p className='text-gray-300'>
              Dont forget to confirm order to customer before submit!
            </p>
            {/* Map Order List */}
            <div className='flex flex-col gap-2 py-5'>
              {orderList.map((order: any, index) => (
                <div className='flex justify-between items-center '>
                  <h3 className='font-bold text-md'>{order.name}</h3>
                  <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-2'>
                      <BiSolidMinusCircle className='text-xl' />
                      <h1>{order.quantity}</h1>
                      <BsPlusCircleFill className='text-lg' />
                    </div>
                    <h3 className='text-md'>
                      Rp.{' '}
                      {(order.quantity * order.price).toLocaleString('id-ID')}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className='border-t'></div>
            <div className='flex justify-between items-center'>
              <h3 className='font-bold text-md'>Total</h3>
              <h3 className='text-md font-bold text-pos-primary'>
                Rp.{' '}
                {orderList
                  .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                  .toLocaleString('id-ID')}
              </h3>
            </div>
            <Formik
              initialValues={{
                customerName: '',
                tableNumber: '',
              }}
              validationSchema={createOrderListSchema}
              onSubmit={(values: any) => {
                handlePostOrderList({
                  customerName: values.customerName,
                  tableNumber: values.tableNumber,
                });
              }}
            >
              <Form>
                <div className='py-5'>
                  <h3 className='font-bold text-lg'>Customer Info</h3>
                  <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Customer name</legend>
                    <Field
                      name='customerName'
                      type='text'
                      className='input w-full'
                      placeholder='Type here'
                    />
                    <ErrorMessage
                      name='customerName'
                      component={'div'}
                      className='text-red-500'
                    />
                  </fieldset>
                  <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Table number</legend>
                    <Field
                      name='tableNumber'
                      type='text'
                      className='input w-full'
                      placeholder='Type here'
                    />
                    <ErrorMessage
                      name='tableNumber'
                      component={'div'}
                      className='text-red-500'
                    />
                  </fieldset>
                </div>
                <button
                  type='submit'
                  className='btn bg-pos-primary w-full rounded-lg'
                >
                  Submit Order
                </button>
              </Form>
            </Formik>
            <div className='modal-action'>
              <form method='dialog'>
                {/* if there is a button in form, it will close the modal */}
                <button className='btn'>Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className='grid grid-cols-4 gap-5 mt-5'>
        {products.map((product: any, index) => (
          <div
            key={index}
            onClick={() => handleAddOrder(product)}
            className='flex flex-col items-center shadow-lg rounded-xl py-10 col-span-1 cursor-pointer'
          >
            <div className='w-40 h-40'>
              <img
                src={product.imageUrl}
                className='w-full h-full object-cover'
              />
            </div>
            <h1 className='text-2xl font-bold'>{product.name}</h1>
            <p className='text-gray-300'>{product.calorie} Gram</p>
            <h1 className='text-xl font-bold text-pos-primary mt-3'>
              IDR {product.price.toLocaleString('id-ID')}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

// 1. Buatlah table baru di backendless untuk menampung data `order list`
// 2. Buatlah end point API untuk submiting data `order list` ke table yang sudah dibuat
// 3. Buatlah fungsi `handlePostOrder` untuk mengirim data `order list` dari frontend ke API yang sudah dibuat
