import * as Yup from 'yup';

// Export Named
export const createTodoSchema = Yup.object().shape({
  activity: Yup.string().required('Activity is required'),
  activityPlace:  Yup.string().required('Activity place is required')
})