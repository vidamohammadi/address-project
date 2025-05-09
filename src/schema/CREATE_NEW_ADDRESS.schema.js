import { required, minLength, maxLength, helpers } from '@vuelidate/validators'

export const CREATE_NEW_ADDRESS = {
     schema: [
        {
            id: 'firstName',
            label: 'نام',
            placeholder: 'مثال: محمد',
            show_details: true,
            cols: 12,
            lg: 4,
            type: 'text',
            class: 'py-0'
        },
        {
            id: 'lastName',
            label: 'نام خانوادگی',
            placeholder: 'مثال: رضایی',
            show_details: true,
            cols: 12,
            lg: 4,
            type: 'text',
            class: 'py-0'
        },
        {
            id: 'mobileNumber',
            label: 'شماره تلفن همراه ',
            placeholder: 'مثال: 09121245789',
            show_details: true,
            cols: 12,
            lg: 4,
            type: 'text',
            class: 'py-0'
        },
         {
            id: 'phoneNumber',
            label: 'شماره تلفن ثابت (اختیاری)',
            placeholder: 'مثال: 02144886245',
            show_details: true,
            cols: 12,
            lg: 4,
            type: 'text',
            class: 'py-0'
        },
        {
            id: 'addressDetails',
            label: 'آدرس',
            placeholder: 'آدرس را وارد کنید.',
            show_details: true,
            cols: 12,
            lg: 12,
            type: 'textarea',
            class: 'py-0'
        },
     ],

     model: {
         firstName: null,
         lastName: null,
         mobileNumber: '',
         phoneNumber: '',

        addressDetails: null,

    },

    validations: {
        firstName: {
            required: helpers.withMessage('نام الزامی است', required)
        },
        lastName: {
            required: helpers.withMessage('نام خانوادگی الزامی است', required)
        },
        mobileNumber: {
            required: helpers.withMessage('شماره موبایل الزامی است', required),
            minLength: helpers.withMessage('شماره موبایل فرمت درست ندارد', minLength(11)),
            maxLength: helpers.withMessage('شماره موبایل فرمت درست ندارد', maxLength(11))
        },
        phoneNumber: {
            required: helpers.withMessage('شماره تلفن الزامی است', required),
            minLength: helpers.withMessage('شماره تلفن فرمت درست ندارد', minLength(11)),
            maxLength: helpers.withMessage('شماره تلفن فرمت درست ندارد', maxLength(11))
        },
        addressDetails: {
            required: helpers.withMessage('آدرس الزامی است', required)
        }
    }

};
