import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Username is required'),
    email: yup.string()
        .trim()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup.string()
        .trim()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    confirm: yup.string()
        .trim()
        .oneOf([yup.ref('password')], null),
    terms: yup.bool()
        .oneOf([true], 'You must accept Terms of Service.  You will be assimilated.  Resistance is futile.'),
})

export default formSchema