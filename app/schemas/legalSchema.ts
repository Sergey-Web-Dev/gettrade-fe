import * as Yup from 'yup';

export const legalSchema = Yup.object().shape({
    organization_name: Yup.string()
        .required('Обязательное поле'),
    address: Yup.string()
        .required('Обязательное поле'),
    inn: Yup.string()
        .required('Обязательное поле'),
    cpp: Yup.string()
        .required('Обязательное поле'),
    check: Yup.string()
        .required('Обязательное поле'),
    bank_name: Yup.string()
        .required('Обязательное поле'),
    bik: Yup.string()
        .required('Обязательное поле'),
    corporate_check: Yup.string()
        .required('Обязательное поле'),
    name: Yup.string()
        .required('Обязательное поле'),
    phone: Yup.string()
        .required('Обязательное поле'),
    email: Yup.string()
        .required('Обязательное поле')
        .email('Неверный формат email'),
});