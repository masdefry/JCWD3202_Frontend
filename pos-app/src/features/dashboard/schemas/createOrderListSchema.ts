import * as Yup from 'yup';

export const createOrderListSchema = Yup.object().shape({
    customerName: Yup.string().required('Customer name is required'),
    tableNumber: Yup.number().min(1).required('Table number is required'),
})