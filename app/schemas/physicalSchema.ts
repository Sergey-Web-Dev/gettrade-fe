import * as Yup from 'yup';

export const physicalSchema = Yup.object().shape({
    name: Yup.string()
        .required('Обязательное поле'),
    phone: Yup.string()
        .required('Обязательное поле'),
    email: Yup.string()
        .required('Обязательное поле')
        .email('Неверный формат email'),
});