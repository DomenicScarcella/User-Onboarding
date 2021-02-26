import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('ERROR: Username is required'),
    email: yup.string()
        .trim()
        .email('ERROR: Must be a valid email address')
        .required('ERROR: Email is required'),
    password: yup.string()
        .trim()
        .required('ERROR: Password is required')
        .min(6, 'ERROR: Password must be at least 6 characters long'),
    confirm: yup.string()
        .trim()
        .oneOf([yup.ref('password')], null),
    terms: yup.bool()
        .oneOf([true], 'ERROR: You must accept Terms of Service.  You will be assimilated.  Resistance is futile.'),
})

export default formSchema