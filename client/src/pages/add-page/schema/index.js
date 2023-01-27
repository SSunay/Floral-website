import * as Yup from 'yup';
 
export const AddNewProducts = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(505, 'Too Long!')
    .required('Please, Fill the section !!!'),
    descripton: Yup.string()
    .min(2, 'Too Short!')
    .max(505, 'Too Long!')
    .required('Please, Fill the section !!!'),
    price: Yup.string()
    .min(2, 'Too Short!')
    .max(5000000, 'Too Long!')
    .required('Please, Fill the section !!!'),
    img: Yup.string()
    .min(2, 'Too Short!')
    .max(5055, 'Too Long!')
    .required('Please, Fill the section !!!'),
});

